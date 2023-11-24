import express from 'express';
import router from './routes/index.js';

const app = express();

app.use('/', router);

app.set('view engine', 'pug');

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Listening on port 5000');
});
