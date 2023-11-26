import express from 'express';
import {
	homePage,
	aboutPage,
	tripsPage,
	testimonialsPage,
} from '../controllers/pagesController.js';

const router = express.Router();

router.get('/', homePage);

router.get('/nosotros', aboutPage);

router.get('/viajes', tripsPage);

router.get('/testimoniales', testimonialsPage);

export default router;
