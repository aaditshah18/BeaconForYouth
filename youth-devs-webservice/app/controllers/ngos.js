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
