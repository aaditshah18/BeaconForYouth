import CampaignsService from '../services/campaigns.js';
import {
    setResponse,
    setCreateResponse,
    setError,
  } from "./response-handler.js";

export const createCampaign = async (req, res) => {
    try {        
        const campaign = await CampaignsService.createCampaign(req.body);
        setCreateResponse(campaign, res);
    } catch (error) {
        console.log(error);
        setError(res);
    }
};

export const getCampaigns = async (req, res) => {
    try {
        const campaigns = await CampaignsService.getAllCampaigns();
        return setResponse(campaigns, res);
    } catch (error) {
        console.log(error);
        return setError(res, error);
    }
};

export const getCampaignById = async (req, res) => {
    try {
        const campaign = await CampaignsService.getCampaignById(req.params.id);
        return setResponse(res, campaign);
    } catch (error) {
        return setError(res, error);
    }
}


