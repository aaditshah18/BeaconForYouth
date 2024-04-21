import express from "express";
import * as ngoController from "../controllers/ngos.js";
import NGO from '../models/ngos.js'; // Importing the NGO model


const router = express.Router();

// Routes for general NGO operations
router.route("/list").get(ngoController.search).post(ngoController.post);



// Routes for specific NGO identified by ID
router.route("/:id")
    .put(ngoController.put)    // Assuming this handles full updates
    .patch(ngoController.patch); // Assuming this handles partial updates




export default router;
