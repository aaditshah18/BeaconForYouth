const Campaign = require('../models/campaigns');

const campaignService = {
    createCampaign: async (campaignData) => {
        const campaign = new Campaign(campaignData);
        return await campaign.save();
    },

    updateCampaign: async (campaignId, campaignData) => {
        return await Campaign.findByIdAndUpdate(campaignId, campaignData, { new: true });
    },

    deleteCampaign: async (campaignId) => {
        return await Campaign.findByIdAndRemove(campaignId);
    },
    getAllCampaigns: async () => {
        return await Campaign.find({});
    },
    getCampaignById: async (campaignId) => {
        return await Campaign.findById(campaignId);
    }
};

module.exports = campaignService;