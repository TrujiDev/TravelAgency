import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

app.use((req, res, next) => {
	const year = new Date();
	res.locals.currentYear = year.getFullYear();
	res.locals.siteName = 'Agencia de Viajes';
	next();
});

app.use('/', router);
app.use(express.static('public'));

app.set('view engine', 'pug');

db.authenticate()
	.then(() => console.log('DB connected'))
	.catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Listening on port 5000');
});
