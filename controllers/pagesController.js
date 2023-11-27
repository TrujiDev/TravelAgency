import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonial.js';

const homePage = async (req, res) => {
	try {
		const travels = await Travel.findAll({ limit: 3 });

		res.render('inicio', {
			page: 'Inicio',
			clase: 'home',
			travels,
		});	
	} catch (error) {
		console.log(error);
	}
};

const aboutPage = (req, res) => {
	res.render('nosotros', {
		page: 'Nosotros',
	});
};

const tripsPage = async (req, res) => {
	const travels = await Travel.findAll();

	res.render('viajes', {
		page: 'Próximos Viajes',
		travels,
	});
};

const detailsPage = async (req, res) => {
	const { viaje } = req.params;

	try {
		const travel = await Travel.findOne({ where: { slug: viaje } });

		res.render('viaje', {
			page: 'Información Viaje',
			travel,
		});
	} catch (error) {
		console.log(error);
	}
};

const testimonialsPage = async (req, res) => {
	try {
		const testimonials = await Testimonial.findAll();

		res.render('testimoniales', {
			page: 'Testimoniales',
			testimonials,
		});
	} catch (error) {
		
	}
};

export { homePage, aboutPage, tripsPage, detailsPage, testimonialsPage };
