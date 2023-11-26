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

const tripsPage = (req, res) => {
	res.render('viajes', {
		page: 'Viajes',
	});
};

const testimonialsPage = (req, res) => {
	res.render('testimoniales', {
		page: 'Testimoniales',
	});
};

export { homePage, aboutPage, tripsPage, testimonialsPage };
