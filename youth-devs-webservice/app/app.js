import cors from "cors";
import express from "express";
import authMiddleware from "./middleware.js";

import initializeRoutes from "./routes/index.js";
import mongoose from "mongoose";

const initialize = (app) => {
  app.use(cors());
  // Allow access control headers
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(authMiddleware);
  mongoose.connect(process.env.MONGO_CONNECTION);
  initializeRoutes(app);
};

export default initialize;
