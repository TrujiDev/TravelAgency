import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Home page');
});

router.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

export default router;