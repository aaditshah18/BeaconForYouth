import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define Complaints model
const ComplaintsSchema = new Schema({
  userData: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: false,
  },
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

const ComplaintsModel = mongoose.model("Complaints", ComplaintsSchema);

export default ComplaintsModel;
