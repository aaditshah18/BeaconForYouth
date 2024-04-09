import express from 'express';

import * as webServiceController from '../controllers/web-service-controller.js';



const router = express.Router();

router.route('/complaints')
    .get(webServiceController.search);

export default router;

