import { Travel } from "../models/Travel.js";

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

const testimonialsPage = (req, res) => {
	res.render('testimoniales', {
		page: 'Testimoniales',
	});
};

export { homePage, aboutPage, tripsPage, testimonialsPage };
