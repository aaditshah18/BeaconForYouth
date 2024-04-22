import express from "express";

import * as dashboardController from "../controllers/dashboards.js";

const router = express.Router();

router
  .route("/ngos/:id/complaints/dashboard")
  .get(dashboardController.getNgoComplaint);

router
  .route("/admins/complaints/dashboard")
  .get(dashboardController.getAdminComplaint);

export default router;
