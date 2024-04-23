/**
 * Documentation for NGO Controller
 * This module contains functions to handle CRUD operations for NGOs.
 *
 * @module NgoController
 */

import {
  setResponse,
  setCreateResponse,
  setError,
} from "./response-handler.js";
import NgoModel from "../models/ngos.js";
import ComplaintsModel from "../models/complaints.js";

import { handleCreateUser } from "../services/users.js";

/**
 * Controller function to search for NGOs.
 *
 * @async
 * @function search
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the search operation is complete.
 */
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

/**
 * Controller function to create a new NGO.
 *
 * @async
 * @function post
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the creation operation is complete.
 */
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

/**
 * Controller function to update an existing NGO using PUT method.
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
    const updatedNgo = await NgoModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    setResponse(updatedNgo, response);
  } catch (error) {
    setError(response);
  }
};

/**
 * Controller function to update an existing NGO using PATCH method.
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
    const updatedNgo = await NgoModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    setResponse(updatedNgo, response);
  } catch (error) {
    setError(response);
  }
};
