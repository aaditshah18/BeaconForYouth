// Directly import the model
import UserModel from "./users.js";

// Define Admin model, inheriting properties from UserModel
const AdminModel = UserModel.discriminator("Admin", {});

export default AdminModel;
