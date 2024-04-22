import complaintsRouter from "./complaints.js";
import ngoRouter from "./ngos.js";
import userRouter from "./users.js";
import donationRouter from "./donation.js";
import campaignRouter from "./campaigns.js";
import dashboardsRouter from "./dashboards.js";

const API_PATH = process.env.API_PATH || "/api/v1";

const initializeRoutes = (app) => {
  app.use(`${API_PATH}/complaints`, complaintsRouter);
  app.use(`${API_PATH}/campaigns`, campaignRouter);
  app.use(`${API_PATH}/ngos`, ngoRouter);
  app.use(`${API_PATH}/`, userRouter);
  app.use(`${API_PATH}/donation`, donationRouter);
  app.use(`${API_PATH}/`, dashboardsRouter);
};

export default initializeRoutes;
