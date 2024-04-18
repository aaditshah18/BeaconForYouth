import cors from "cors";
import express from "express";
import authMiddleware from "./middleware.js";

import initializeRoutes from "./routes/index.js";
import mongoose from "mongoose";

const initialize = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(authMiddleware);
  mongoose.connect(process.env.MONGO_CONNECTION);
  initializeRoutes(app);
};

export default initialize;
