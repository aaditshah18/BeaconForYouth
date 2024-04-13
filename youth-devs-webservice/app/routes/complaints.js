import express from "express";
import * as complaintsController from "../controllers/complaints.js";

const router = express.Router();

router
  .route("/")
  .get(complaintsController.search)
  .post(complaintsController.post);

router
  .route("/:id/status")
  .patch(complaintsController.patch)
  .put(complaintsController.put);

export default router;
