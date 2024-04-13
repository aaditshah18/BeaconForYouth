import { ComplaintsModel } from "../models/index.js";

/**
 * Save the meeting notes data to the database
 * @param {*} complaintData
 * @returns
 */
export const save = async (complaintData) => {
  const complaint = new ComplaintsModel(complaintData);
  return await complaint.save();
};

/**
 * Search meeting notes based on keywords
 * in title, meeting points or content.
 * @param {*} params
 * @returns
 */

export const search = async (params = {}) => {
  const complaints = await ComplaintsModel.find(params).exec();
  return complaints;
};

/**
 * GET a particular complaint note by ID
 * @param {*} id
 * @returns
 */
export const get = async (id) => {
  const note = await ComplaintsModel.findOne({ noteId: id }).exec();
  return note;
};

/**
 * Update a complaint by ID
 * @param {*} id
 * @param {*} newData
 * @returns
 */
export const updateStatus = async (id, newData, method) => {
  let updatedComplaint;

  if (method === "PUT") {
    // For PUT requests, replace the entire resource with the new data
    updatedNote = await meetingNotes
      .findOneAndUpdate({ noteId: id }, newData, { new: true })
      .exec();
  } else if (method === "PATCH") {
    // For PATCH requests, apply partial modifications to the resource
    updatedNote = await meetingNotes
      .findOneAndUpdate({ noteId: id }, { $set: newData }, { new: true })
      .exec();
  } else {
    throw new Error("Invalid method provided");
  }

  return updatedNote;
};

export const remove = async (id) => {
  const deletedComplaint = await ComplaintsModel.findOneAndDelete({
    noteId: id,
  }).exec();
  return deletedComplaint;
};
