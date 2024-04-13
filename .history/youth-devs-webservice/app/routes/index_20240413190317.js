import complaintsRouter from "./complaints.js";

const initializeRoutes = (app) => {
  app.use("/complaints", complaintsRouter);
};

export default initializeRoutes;