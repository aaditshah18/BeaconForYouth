const express = require('express');
const campaignController = require('../controllers/campaigns');

const router = express.Router();

// Route to create a new campaign
router.post('/campaigns', campaignController.createCampaign);

// Route to update a campaign
// router.put('/campaigns/:id', campaignController);

// Route to delete a campaign
// router.delete('/campaigns/:id', campaignControllerdeleteCampaign);

// Route to get all campaigns
router.get('/campaigns', campaignController.getCampaigns);

module.exports = router;