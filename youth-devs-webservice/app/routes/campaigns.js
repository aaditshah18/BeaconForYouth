import express from "express";
import { createCampaign, getCampaignById, getCampaigns} from "../controllers/campaigns.js";

const router = express.Router();

// Route to create a new campaign
router.post('/', createCampaign);

// Route to update a campaign
// router.put('/campaigns/:id', campaignController);

// Route to delete a campaign
// router.delete('/campaigns/:id', campaignControllerdeleteCampaign);

// Route to get all campaigns
router.get('/', getCampaigns);

export default router;