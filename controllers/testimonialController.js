import { Testimonial } from '../models/Testimonial.js';

export const saveTestimonial = async (req, res) => {
	const { name, email, message } = req.body;

	const errors = [];

	if (name.trim() === '') {
		errors.push({ message: 'El nombre esta vacio' });
	}

	if (email.trim() === '') {
		errors.push({ message: 'El email esta vacio' });
	}

	if (message.trim() === '') {
		errors.push({ message: 'El testimonio esta vacio' });
	}

	if (errors.length > 0) {
		const testimonials = await Testimonial.findAll();

		res.render('testimoniales', {
			page: 'Testimoniales',
			errors,
			name,
			email,
			message,
			testimonials,
		});
	} else {
		try {
			await Testimonial.create({
				name,
				email,
				message,
			});

			res.redirect('/testimoniales');
		} catch (error) {
			console.log(error);
		}
	}
};
