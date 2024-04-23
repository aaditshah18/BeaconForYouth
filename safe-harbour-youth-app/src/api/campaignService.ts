/**
 * Module: campaignService
 * Description: This module provides functions to interact with the campaigns API endpoints.
 * It includes methods for retrieving, creating, updating, and deleting campaigns.
 */

import axios from "axios";
import { API_BASE_URL } from "./constants";

// Base URL for campaigns API
const CAMPAIGNS_BASE_URL = `${API_BASE_URL}campaigns`;

/**
 * Function: getCampaigns
 * Description: Retrieves a list of campaigns from the API.
 * Returns: Promise that resolves with the list of campaigns retrieved from the API.
 */
export const getCampaigns = async () => {
  try {
    // Retrieve user token from localStorage
    const userToken = localStorage.getItem("Token");

    // Make GET request to campaigns endpoint with authorization token
    const response = await axios.get(`${CAMPAIGNS_BASE_URL}`, {
      headers: {
        Authorization: `JWT ${userToken}`,
        "Content-Type": "application/json",
      },
    });

    // Return data retrieved from the API
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error(error);
  }
};

/**
 * Function: createCampaign
 * Description: Creates a new campaign by sending data to the API.
 * Parameters:
 *   - campaignData: Object containing data for the new campaign.
 * Returns: Promise that resolves with the data of the created campaign.
 */
export const createCampaign = async (campaignData: any) => {
  try {
    // Retrieve user token from localStorage
    const userToken = localStorage.getItem("Token");

    // Make POST request to campaigns endpoint with campaign data and authorization token
    const response = await axios.post(`${CAMPAIGNS_BASE_URL}`, campaignData, {
      headers: {
        Authorization: `JWT ${userToken}`,
        "Content-Type": "application/json",
      },
    });

    // Return data of the created campaign
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error(error);
  }
};

/**
 * Function: updateCampaign
 * Description: Updates an existing campaign with new data.
 * Parameters:
 *   - id: ID of the campaign to be updated.
 *   - updatedData: Object containing updated data for the campaign.
 * Returns: Promise that resolves with the data of the updated campaign.
 */
export const updateCampaign = async (id: string, updatedData: any) => {
  try {
    // Retrieve user token from localStorage
    const userToken = localStorage.getItem("Token");

    // Make PUT request to update the specified campaign with updated data and authorization token
    const response = await axios.put(
      `${CAMPAIGNS_BASE_URL}/${id}`,
      updatedData,
      {
        headers: {
          Authorization: `JWT ${userToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Return data of the updated campaign
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error(error);
  }
};

/**
 * Function: deleteCampaign
 * Description: Deletes a campaign with the specified ID.
 * Parameters:
 *   - id: ID of the campaign to be deleted.
 * Returns: Promise that resolves with the data confirming the deletion.
 */
export const deleteCampaign = async (id: string) => {
  try {
    // Retrieve user token from localStorage
    const userToken = localStorage.getItem("Token");

    // Make DELETE request to delete the specified campaign with authorization token
    const response = await axios.delete(`${CAMPAIGNS_BASE_URL}/${id}`, {
      headers: {
        Authorization: `JWT ${userToken}`,
        "Content-Type": "application/json",
      },
    });

    // Return data confirming the deletion
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error(error);
  }
};
