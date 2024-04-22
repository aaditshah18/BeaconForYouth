// ngo.ts
import mongoose from "mongoose";

const API_BASE_URL = "/api"; // Base URL for your API, adjust as needed

export type NgoDetails = {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  address: string;
  email: string;
  phone: string;
  description: string;
  lat: number;
  lng: number;
  type: string;
  status: string;
  createdTs: Date;
  updatedTs: Date;
  imageUrl?: string;
};

// Fetch all NGOs
export const fetchAllNgos = async (): Promise<NgoDetails[]> => {
  try {
    const response = await fetch("/ngos");
    if (!response.ok) {
      throw new Error("Failed to fetch NGO details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching NGO details:", error);
    throw error;
  }
};

// Register a new NGO
export const registerNgo = async (ngoData: NgoDetails): Promise<NgoDetails> => {
  try {
    const response = await fetch(`${API_BASE_URL}/register-ngo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ngoData),
    });
    if (!response.ok) {
      throw new Error("Failed to register NGO");
    }
    return await response.json();
  } catch (error) {
    console.error("Error registering NGO:", error);
    throw error;
  }
};
