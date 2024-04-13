import * as complaintService from "./../services/complaints.js";
import {
  setResponse,
  setCreateResponse,
  setError,
} from "./response-handler.js";
import ComplaintsModel from "../models/complaints.js";

export const search = async (request, response) => {
  try {
    const queryParams = { ...request.query };
    // Constructing the search query
    const searchQuery = {};
    // Perform the search using the constructed query
    const notes = await complaintService.search(searchQuery);

    // Send the search results as response
    setResponse(notes, response);
  } catch (error) {
    console.log(error);
    setError(response);
  }
};

/**
 * Controller function to create a new meeting note.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the creation operation is complete.
 */
export const post = async (request, response) => {
  try {
    let latestComplaintId = 1;
    const complaintData = { ...request.body };
    const latestComplaint = await ComplaintsModel.findOne(
      {},
      {},
      { sort: { noteId: -1 } }
    );
    if (latestComplaint) {
      latestComplaintId = latestComplaint.noteId + 1;
    }
    complaintData["noteId"] = latestComplaintId;
    const newComplaint = await complaintService.save(complaintData);
    setCreateResponse(newComplaint, response);
  } catch (error) {
    setError(response);
  }
};

export const put = async (request, response) => {
  try {
    const id = request.params.id;
    const newData = { ...request.body };
    const updatedComplaint = await complaintService.update(id, newData, "PUT");
    setResponse(updatedComplaint, response);
  } catch (error) {
    setError(response);
  }
};

/**
 * Controller function to update a meeting note by its ID using PATCH method.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the update operation is complete.
 */
export const patch = async (request, response) => {
  try {
    const id = request.params.id;
    const newData = { ...request.body };
    const updatedComplaint = await complaintService.update(
      id,
      newData,
      "PATCH"
    );
    setResponse(updatedComplaint, response);
  } catch (error) {
    setError(response);
  }
};
