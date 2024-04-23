/**
 * Documentation for Campaign Controller
 * This module contains functions to handle CRUD operations for campaigns.
 * These functions interact with the CampaignsService to perform database operations.
 *
 * @module CampaignController
 */

import CampaignsService from "../services/campaigns.js";
import {
  setResponse,
  setCreateResponse,
  setError,
} from "./response-handler.js";

/**
 * Create a new campaign.
 *
 * @async
 * @function createCampaign
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A Promise that resolves to the result of creating a campaign.
 */
export const createCampaign = async (req, res) => {
  try {
    const campaign = await CampaignsService.createCampaign(req.body);
    setCreateResponse(campaign, res);
  } catch (error) {
    console.log(error);
    setError(res);
  }
};

/**
 * Get all campaigns.
 *
 * @async
 * @function getCampaigns
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A Promise that resolves to the list of all campaigns.
 */
export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignsService.getAllCampaigns();
    return setResponse(campaigns, res);
  } catch (error) {
    console.log(error);
    return setError(res, error);
  }
};

/**
 * Get a campaign by its ID.
 *
 * @async
 * @function getCampaignById
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A Promise that resolves to the campaign object with the specified ID.
 */
export const getCampaignById = async (req, res) => {
  try {
    const campaign = await CampaignsService.getCampaignById(req.params.id);
    return setResponse(campaign, res);
  } catch (error) {
    return setError(res, error);
  }
};

/**
 * Update an existing campaign.
 *
 * @async
 * @function updateCampaign
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A Promise that resolves to the updated campaign object.
 */
export const updateCampaign = async (req, res) => {
  try {
    const campaign = await CampaignsService.updateCampaign(
      req.params.id,
      req.body
    );
    return setResponse(campaign, res);
  } catch (error) {
    console.log(error);
    return setError(res, error);
  }
};

/**
 * Delete a campaign.
 *
 * @async
 * @function deleteCampaign
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A Promise that resolves when the campaign is successfully deleted.
 */
export const deleteCampaign = async (req, res) => {
  try {
    await CampaignsService.deleteCampaign(req.params.id);
    return setResponse({}, res);
  } catch (error) {
    console.log(error);
    return setError(res, error);
  }
};
