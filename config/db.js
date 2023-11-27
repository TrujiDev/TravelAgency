import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
	process.env.DB_NAME,
	process.env.USER,
	process.env.PASSWORD,
	{
		host: process.env.HOST,
		dialect: 'mysql',
		port: process.env.PORT,
		define: {
			timestamps: false,
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
		operatorAliases: false,
	}
);

export default db;
