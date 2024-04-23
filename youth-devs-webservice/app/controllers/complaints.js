/**
 * Documentation for Complaint Controller
 * This module contains functions to handle CRUD operations for complaints.
 * These functions interact with the ComplaintsService to perform database operations.
 *
 * @module ComplaintController
 */

import * as complaintService from "./../services/complaints.js";
import {
  setResponse,
  setCreateResponse,
  setError,
} from "./response-handler.js";
import ComplaintsModel from "../models/complaints.js";

/**
 * Controller function to search for complaints based on query parameters.
 *
 * @async
 * @function search
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the search operation is complete.
 */
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
 * Controller function to create a new complaint.
 *
 * @async
 * @function post
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the creation operation is complete.
 */
export const post = async (request, response) => {
  try {
    const complaintData = { ...request.body };
    const newComplaint = await complaintService.save(complaintData);
    setCreateResponse(newComplaint, response);
  } catch (error) {
    console.log(error);
    setError(response);
  }
};

/**
 * Controller function to update a complaint by its ID using PUT method.
 *
 * @async
 * @function put
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the update operation is complete.
 */
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
 * Controller function to update a complaint by its ID using PATCH method.
 *
 * @async
 * @function patch
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
