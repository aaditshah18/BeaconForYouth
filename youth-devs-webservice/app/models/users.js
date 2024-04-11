import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define User model
const UserSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  NgoID: {
    type: Schema.Types.ObjectId,
    ref: "Ngo",
    required: true,
    unique: false,
  },
  createdTs: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedTs: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
