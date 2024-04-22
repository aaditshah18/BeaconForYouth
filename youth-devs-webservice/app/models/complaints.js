import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define Complaints model
const ComplaintsSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  ngoId: {
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
