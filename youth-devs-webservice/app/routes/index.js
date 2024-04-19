import complaintsRouter from "./complaints.js";
import ngoRouter from "./ngo.js";
import userRouter from "./users.js";
import donationRouter from "./donation.js";


const initializeRoutes = (app) => {
  app.use("/complaints", complaintsRouter);
  app.use("/ngos", ngoRouter);
  app.use("/users", userRouter);
  app.use("/donation", donationRouter);
};

export default initializeRoutes;
