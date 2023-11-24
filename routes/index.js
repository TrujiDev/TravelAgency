import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.render('home');
});

router.get('/aboutUs', (req, res) => {
	const travel = 'Travel to London';

	res.render('aboutUs', {
		travel,
	});
});

export default router;
