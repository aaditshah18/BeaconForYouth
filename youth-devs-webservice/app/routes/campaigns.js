import express from "express";
import { createCampaign, getCampaignById, getCampaigns, deleteCampaign, updateCampaign} from "../controllers/campaigns.js";

const router = express.Router();

router.post('/', createCampaign);

router.put('/:id', updateCampaign);

router.delete('/:id', deleteCampaign);

router.get('/', getCampaigns);

router.get('/:id', getCampaignById);

export default router;