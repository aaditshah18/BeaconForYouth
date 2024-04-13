// Directly import the model, not the schema
import UserModel from "./users.js";

// Define NgoModel, inheriting properties from UserModel
const NgoModel = UserModel.discriminator("Ngo", {});

export default NgoModel;
