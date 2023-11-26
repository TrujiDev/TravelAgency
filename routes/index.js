import express from 'express';
import {
	homePage,
	aboutPage,
	tripsPage,
	detailsPage,
	testimonialsPage,
} from '../controllers/pagesController.js';

const router = express.Router();

router.get('/', homePage);

router.get('/nosotros', aboutPage);

router.get('/viajes', tripsPage);

router.get('/viajes/:viaje', detailsPage);

router.get('/testimoniales', testimonialsPage);

export default router;
