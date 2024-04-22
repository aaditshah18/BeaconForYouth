import ComplaintsModel from "../models/complaints.js";

/**
 * Controller to GET all the complaints related to a particular NGO
 * @param {*} request
 * @param {*} response
 * @returns
 */
export const getNgoComplaint = async (request, response) => {
  try {
    const ngoId = request.params.id;

    // Fetch all complaints for the given NGO ID
    console.log(ngoId);
    const allComplaints = await ComplaintsModel.find({ ngoId: ngoId }).exec();

    console.log(allComplaints);
    // Check if any complaints were found
    if (allComplaints.length === 0) {
      return response
        .status(404)
        .json({ message: "No Complaints found for this NGO." });
    }

    // Calculate counts based on complaint status
    const totalComplaints = allComplaints.length;
    const totalPending = allComplaints.filter(
      (c) => c.status === "pending"
    ).length;
    const totalCompleted = allComplaints.filter(
      (c) => c.status === "completed"
    ).length;
    const totalInProgress = allComplaints.filter(
      (c) => c.status === "inProgress"
    ).length;

    const dashboardData = {
      totalComplaints: totalComplaints,
      totalPending: totalPending,
      totalCompleted: totalCompleted,
      totalInProgress: totalInProgress,
      ngo_id: ngoId,
    };

    response.json(dashboardData);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "An error occurred while fetching the dashboard data.",
    });
  }
};

export const getAdminComplaint = async (request, response) => {
  try {
    const ngoId = request.params.id;

    // Fetch all complaints
    const allComplaints = await ComplaintsModel.find().exec();

    console.log(allComplaints);
    // Check if any complaints were found
    if (allComplaints.length === 0) {
      return response
        .status(404)
        .json({ message: "No Complaints found for this NGO." });
    }

    // Calculate counts based on complaint status
    const totalComplaints = allComplaints.length;
    const totalPending = allComplaints.filter(
      (c) => c.status === "pending"
    ).length;
    const totalCompleted = allComplaints.filter(
      (c) => c.status === "completed"
    ).length;
    const totalInProgress = allComplaints.filter(
      (c) => c.status === "inProgress"
    ).length;

    const dashboardData = {
      totalComplaints: totalComplaints,
      totalPending: totalPending,
      totalCompleted: totalCompleted,
      totalInProgress: totalInProgress,
      ngo_id: ngoId,
    };

    response.json(dashboardData);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "An error occurred while fetching the dashboard data.",
    });
  }
};
