import Campaign from '../models/campaigns.js';

const campaignService = {
    createCampaign: async (campaignData) => {
        const campaign = new Campaign(campaignData);
        return await campaign.save();
    },

    updateCampaign: async (campaignId, campaignData) => {
        return await Campaign.findByIdAndUpdate(campaignId, campaignData, { new: true });
    },

    deleteCampaign: async (campaignId) => {
        return await Campaign.findOneAndDelete(campaignId).exec();
    },
    
    getAllCampaigns: async () => {
        return await Campaign.find({});
    },
    
    getCampaignById: async (campaignId) => {
        return await Campaign.findById(campaignId);
    }
};

export default campaignService;