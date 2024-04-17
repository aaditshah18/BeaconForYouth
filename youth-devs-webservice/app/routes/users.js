import express from "express";
import * as userController from "../controllers/users.js";

const router = express.Router();

router.route("/login").post(userController.post);

export default router;
