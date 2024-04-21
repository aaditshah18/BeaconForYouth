import {
  setResponse,
  setCreateResponse,
  setError,
} from "./response-handler.js";
import NgoModel from "../models/ngos.js";

import { handleCreateUser } from "../services/users.js";

export const search = async (request, response) => {
  try {
    const searchQuery = {};
    const ngos = await NgoModel.find(searchQuery);
    setResponse(ngos, response);
  } catch (error) {
    console.log(error);
    setError(response);
  }
};

export const post = async (request, response) => {
  try {
    const ngoData = { ...request.body };
    const result = await handleCreateUser(ngoData);
    setCreateResponse(result, response);
  } catch (error) {
    console.log(error);
    setError(response);
  }
};

export const put = async (request, response) => {
  try {
    const id = request.params.id;
    const newData = { ...request.body };
    const updatedNgo = await NgoModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    setResponse(updatedNgo, response);
  } catch (error) {
    setError(response);
  }
};

export const patch = async (request, response) => {
  try {
    const id = request.params.id;
    const newData = { ...request.body };
    const updatedNgo = await NgoModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    setResponse(updatedNgo, response);
  } catch (error) {
    setError(response);
  }
};

//write the express API for the get controller to fetch the complaint in the ngo dashboard 


export const get = async (request, response) => {
  try {
    const ngoId = request.params.id;

    // Assuming 'complaints' is a reference in the NgoModel to the ComplaintsModel
    const ngoWithComplaints = await NgoModel.findById(ngoId)
      .populate({
        path: 'complaints',
        match: { ngoId: ngoId }, // Ensure you're only populating complaints related to the NGO
      })
      .exec();

    if (!ngoWithComplaints) {
      return response.status(404).json({ message: 'NGO not found' });
    }

    // Assuming the status is a string that can be 'pending', 'completed', or 'inProgress'
    const totalComplaints = ngoWithComplaints.complaints.length;
    const totalPending = ngoWithComplaints.complaints.filter(c => c.status === 'pending').length;
    const totalCompleted = ngoWithComplaints.complaints.filter(c => c.status === 'completed').length;
    const totalInProgress = ngoWithComplaints.complaints.filter(c => c.status === 'inProgress').length;

    const dashboardData = {
      totalComplaints: totalComplaints,
      totalPending: totalPending,
      totalCompleted: totalCompleted,
      totalInProgress: totalInProgress,
      ngo_id: ngoId
    };

    response.json(dashboardData);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'An error occurred while fetching the dashboard data.' });
  }
};

