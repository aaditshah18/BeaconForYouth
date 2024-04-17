// import bcrypt from bcrypt;
import User from "../models/users.js";

import jwt from "jsonwebtoken";
// const EMAIL_REGEX = /^[a-zA-Z](\.?[a-zA-Z]){2,}@northeastern\.edu$/;
// const NAME_REGEX = /^[a-z ,.'-]+$/i;
import { generateMongoId, checkPassword } from "../utils.js";

export const handleLogin = async (payload) => {
  if (payload.email === undefined) {
    throw new Error("Email cannot be undefined");
  }

  if (payload.password === undefined) {
    throw new Error("Password cannot be undefined");
  }

  const existedUsers = await User.find({ email: payload.email });
  console.log("LETSGO");
  if (existedUsers.length === 0) {
    throw new Error("User does not exist");
  } else if (!checkPassword(payload.password, existedUsers[0].password)) {
    throw new Error("Incorrect Password");
  }

  const result = (
    await User.findOne({ email: payload.email }).select("-password")
  ).toObject();
  console.log(result);
  return {
    name: result.name,
    token: jwt.sign(result, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * process.env.JWT_EXPIRES_IN,
    }),
  };
};
