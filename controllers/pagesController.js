import { Travel } from '../models/Travel.js';

const homePage = (req, res) => {
	res.render('inicio', {
		page: 'Inicio',
	});
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

const testimonialsPage = (req, res) => {
	res.render('testimoniales', {
		page: 'Testimoniales',
	});
};

export { homePage, aboutPage, tripsPage, detailsPage, testimonialsPage };
