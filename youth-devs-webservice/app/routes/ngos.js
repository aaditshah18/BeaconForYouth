import express from "express";
import * as ngoController from "../controllers/ngos.js";
import * as ngoController from "../controllers/ngo.js";
import NGO from '../models/ngos.js'; // Importing the NGO model

const router = express.Router();

// Routes for general NGO operations
router.route("/list").get(ngoController.search).post(ngoController.post);
// Route to fetch a single NGO by ID
router.get("/:id", async (req, res) => {
    try {
        const ngo = await NGO.findById(req.params.id);
        if (!ngo) {
            return res.status(404).json({ message: "NGO not found" });
        }
        res.json(ngo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for specific NGO identified by ID
router.route("/:id")
    .put(ngoController.put)    // Assuming this handles full updates
    .patch(ngoController.patch); // Assuming this handles partial updates

export default router;
