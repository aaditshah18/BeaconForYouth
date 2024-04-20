import complaintsRouter from "./complaints.js";
import ngoRouter from "./ngos.js";
import userRouter from "./users.js";
import donationRouter from "./donation.js";

const initializeRoutes = (app) => {
  app.use("/api/v1/complaints", complaintsRouter);
  app.use("/api/v1/ngos", ngoRouter);
  app.use("/api/v1", userRouter);
  app.use("/api/v1/donation", donationRouter);
};

export default initializeRoutes;
