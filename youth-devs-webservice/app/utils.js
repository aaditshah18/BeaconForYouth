import mongoose from "mongoose";
import bcrypt from "bcrypt";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export const createDbConnection = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  });
};

export const closeDbConnection = async () => {
  await mongoose.disconnect();
  console.log("Mongoose disconnected on app termination");
  process.exit(0);
};

export const generateMongoId = (raw) => {
  const { ObjectId } = mongoose.Types;
  return new ObjectId(raw);
};

export const checkPassword = (password1, password2) => {
  return bcrypt.compareSync(password1, password2);
};
