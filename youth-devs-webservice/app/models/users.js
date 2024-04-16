import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define User/NGO model
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  createdTs: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedTs: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "pending"
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
