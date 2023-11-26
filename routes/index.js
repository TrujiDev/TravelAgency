import express from 'express';
import { saveTestimonial } from '../controllers/testimonialController.js';
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
router.post('/testimoniales', saveTestimonial);

export default router;
