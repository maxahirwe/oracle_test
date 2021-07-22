require('dotenv').config();
module.exports = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	connectionString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, //'localhost/xepdb1'
};
