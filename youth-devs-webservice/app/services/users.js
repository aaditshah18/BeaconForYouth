import bcrypt from "bcrypt";
import User from "../models/users.js";

import jwt from "jsonwebtoken";
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[a-z ,.'-]+$/i;
import { generateMongoId, checkPassword } from "../utils.js";
import NgoModel from "../models/ngos.js";

export const handleCreateUser = async (payload) => {
  if (payload.name === undefined) {
    throw new Error("Name cannot be undefined");
  }

  if (payload.email === undefined) {
    throw new Error("Email cannot be undefined");
  }

  if (payload.password === undefined) {
    throw new Error("Password cannot be undefined");
  }

  const existedUsers = await User.find({ email: payload.email });

  if (existedUsers.length !== 0) {
    throw new Error("The same email exists");
  }

  if (!NAME_REGEX.test(payload.name)) {
    throw new Error("First name is not valid");
  }

  if (!EMAIL_REGEX.test(payload.email)) {
    throw new Error("Please enter a valid email address");
  }

  // Create a new User document
  const newUser = await User.create({
    email: payload.email,
    password: bcrypt.hashSync(payload.password, 10),
    name: payload.name,
    address: payload.address,
    phone: payload.phone,
    description: payload.description,
    type: "NGO",
  });

  // Create a new NgoModel document and associate it with the user
  await NgoModel.create({
    userId: newUser._id,
  });

  return NgoModel.find({ userId: newUser._id }).select("-password");
};

export const handleLogin = async (payload) => {
  if (payload.email === undefined) {
    throw new Error("Email cannot be undefined");
  }

  if (payload.password === undefined) {
    throw new Error("Password cannot be undefined");
  }

  const existedUsers = await User.find({ email: payload.email });
  if (existedUsers.length === 0) {
    throw new Error("User does not exist");
  } else if (!checkPassword(payload.password, existedUsers[0].password)) {
    throw new Error("Incorrect Password");
  }

  const result = (
    await User.findOne({ email: payload.email }).select("-password")
  ).toObject();
  return {
    name: result.name,
    token: jwt.sign(result, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * process.env.JWT_EXPIRES_IN,
    }),
  };
};
