import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define User/NGO model
const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  type: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model("Admin", adminSchema);

export default AdminModel;
