import mongoose from "mongoose";
import { NgoModel } from './index'

const Schema = mongoose.Schema;

// Define User/NGO model
const ngoSchema = new Schema({
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
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

const NgoModel = mongoose.model("Ngo", ngoSchema);

export default NgoModel;
