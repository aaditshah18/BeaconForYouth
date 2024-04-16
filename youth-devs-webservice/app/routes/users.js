import express from "express";
import * as userController from "../controllers/users.js";

const router = express.Router();

// User related APIs
router.route("/login").post(userController.login);

export default router;
