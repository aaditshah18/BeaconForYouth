import mongoose from "mongoose";
import UserModel from "./users.js";

// We need to import Schema from mongoose to use it in the discriminator
const { Schema } = mongoose;

// Define NgoModel, inheriting properties from UserModel and adding NgoID
const ngoSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId, // Assuming user's ID is stored as ObjectId
    ref: "User", // Reference to the User model
    required: true,
    unique: true, // Ensure each user is associated with only one NGO
  },
  createdTs: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedTs: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const NgoModel = UserModel.discriminator("Ngo", ngoSchema);

export default NgoModel;
