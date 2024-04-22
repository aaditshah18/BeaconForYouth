import express from "express";
import { createCampaign, getCampaignById, getCampaigns, deleteCampaign, updateCampaign} from "../controllers/campaigns.js";

const router = express.Router();

// Route to create a new campaign
router.post('/', createCampaign);

router.put('/:id', updateCampaign);

router.delete('/:id', deleteCampaign);


// Route to update a campaign
// router.put('/campaigns/:id', campaignController);

// Route to delete a campaign
// router.delete('/campaigns/:id', campaignControllerdeleteCampaign);

// Route to get all campaigns
router.get('/', getCampaigns);

router.get('/:id', getCampaignById);

export default router;