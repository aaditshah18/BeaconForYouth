/**
 * Module: complaintService
 * Description: This module provides functions to interact with the complaint API endpoints.
 * It includes methods for fetching all complaints and submitting a new complaint.
 */

import mongoose from "mongoose";

// Define the structure of complaint details
export type ComplaintDetails = {
  _id: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  email: string;
  mobile: string;
  ngo: string;
  description: string;
  status: string;
  createdTs: Date;
  updatedTs: Date;
};

/**
 * Function: fetchAllComplaints
 * Description: Retrieves all complaints from the API.
 * Returns: Promise that resolves with an array of complaint details.
 */
export const fetchAllComplaints = async (): Promise<ComplaintDetails[]> => {
  try {
    // Make a GET request to fetch all complaints
    const response = await fetch(`/complaintform`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch complaints");
    }

    // Return the array of complaint details
    return await response.json();
  } catch (error) {
    // Log and rethrow any errors that occur during the request
    console.error("Error fetching complaints:", error);
    throw error;
  }
};

/**
 * Function: submitComplaint
 * Description: Submits a new complaint by sending complaint data to the API.
 * Parameters:
 *   - complaintData: Object containing data for the new complaint.
 * Returns: Promise that resolves with the submitted complaint details.
 */
export const submitComplaint = async (
  complaintData: ComplaintDetails
): Promise<ComplaintDetails> => {
  try {
    // Make a POST request to submit a new complaint
    const response = await fetch(`/complaintform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(complaintData),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to submit complaint");
    }

    // Return the submitted complaint details
    return await response.json();
  } catch (error) {
    // Log and rethrow any errors that occur during the request
    console.error("Error submitting complaint:", error);
    throw error;
  }
};
