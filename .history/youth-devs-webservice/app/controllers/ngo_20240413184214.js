import * as ngoService from "../services/ngo.js";
import {
  setResponse,
  setCreateResponse,
  setError,
} from "./response-handler.js";
import NgoModel from "../models/ngo.js";

export const search = async (request, response) => {
  try {
    const queryParams = { ...request.query };
    const searchQuery = {};
    const ngos = await ngoService.search(searchQuery);
    setResponse(ngos, response);
  } catch (error) {
    console.log(error);
    setError(response);
  }
};

export const post = async (request, response) => {
  try {
    const ngoData = { ...request.body };
    const newNgo = await ngoService.save(ngoData);
    setCreateResponse(newNgo, response);
  } catch (error) {
    setError(response);
  }
};

export const put = async (request, response) => {
  try {
    const id = request.params.id;
    const newData = { ...request.body };
    const updatedNgo = await ngoService.update(id, newData, "PUT");
    setResponse(updatedNgo, response);
  } catch (error) {
    setError(response);
  }
};

export const patch = async (request, response) => {
  try {
    const id = request.params.id;
    const newData = { ...request.body };
    const updatedNgo = await ngoService.update(id, newData, "PATCH");
    setResponse(updatedNgo, response);
  } catch (error) {
    setError(response);
  }
};
