import express from "express";
import * as ngoController from "../controllers/ngo.js";

const router = express.Router();

// Routes for general NGO operations
router.route("/list").get(ngoController.search).post(ngoController.post);

// Routes for specific NGO identified by ID
router.route("/:id").put(ngoController.put).patch(ngoController.patch);

export default router;
