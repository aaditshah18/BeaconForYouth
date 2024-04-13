import webServiceRouter from './web-service-routes.js';


const initializeRoutes = (app) => {
  app.use('/api/v1', webServiceRouter);
}

export default initializeRoutes;