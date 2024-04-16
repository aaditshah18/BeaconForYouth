import mongoose from "mongoose";
import UserModel from "./users.js";

// We need to import Schema from mongoose to use it in the discriminator
const { Schema } = mongoose;

// Define NgoModel, inheriting properties from UserModel and adding NgoID
const ngoSchema = new mongoose.Schema({
    NgoID: {
        type: Schema.Types.ObjectId,
        ref: "Ngo",
        required: true,
        unique: false
    }
});

const NgoModel = UserModel.discriminator("Ngo", ngoSchema);

export default NgoModel;
