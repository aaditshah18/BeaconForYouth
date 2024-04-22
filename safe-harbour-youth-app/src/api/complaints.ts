import mongoose from "mongoose";

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

// Fetch all complaints
export const fetchAllComplaints = async (): Promise<ComplaintDetails[]> => {
  try {
    const response = await fetch(`/complaints`);
    if (!response.ok) {
      throw new Error("Failed to fetch complaints");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching complaints:", error);
    throw error;
  }
};

// Submit a new complaint
export const submitComplaint = async (
  complaintData: ComplaintDetails
): Promise<ComplaintDetails> => {
  try {
    const response = await fetch(`/complaints`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(complaintData),
    });
    if (!response.ok) {
      throw new Error("Failed to submit complaint");
    }
    return await response.json();
  } catch (error) {
    console.error("Error submitting complaint:", error);
    throw error;
  }
};
