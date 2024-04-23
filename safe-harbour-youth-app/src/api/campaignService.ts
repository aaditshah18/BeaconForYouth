import axios from "axios";
import { API_BASE_URL } from "./constants";

const CAMPAIGNS_BASE_URL = `${API_BASE_URL}campaigns`;

export const getCampaigns = async () => {
  try {
    const userToken = localStorage.getItem("Token");

    const response = await axios.get(`${CAMPAIGNS_BASE_URL}`, {
      headers: {
        Authorization: `JWT ${userToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createCampaign = async (campaignData: any) => {
  try {
    const userToken = localStorage.getItem("Token");

    const response = await axios.post(`${CAMPAIGNS_BASE_URL}`, campaignData, {
      headers: {
        Authorization: `JWT ${userToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCampaign = async (id: string, updatedData: any) => {
  try {
    const userToken = localStorage.getItem("Token");

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
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCampaign = async (id: string) => {
  try {
    const userToken = localStorage.getItem("Token");

    const response = await axios.delete(`${CAMPAIGNS_BASE_URL}/${id}`, {
      headers: {
        Authorization: `JWT ${userToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
