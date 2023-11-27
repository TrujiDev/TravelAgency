import Sequelize from 'sequelize';

const db = new Sequelize('travel agency', 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql',
	port: 3306,
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
});

export default db;
