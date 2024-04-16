import complaintsRouter from "./complaints.js";
import ngoRouter from "./ngo.js";

const initializeRoutes = (app) => {
  app.use("/complaints", complaintsRouter);
  app.use("/ngos", ngoRouter);
  app.use("/users", userRouter);
};

export default initializeRoutes;
