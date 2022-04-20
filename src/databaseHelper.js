require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
});

connection.connect((err) => {
	if (err) throw err;
	console.log('Connected');
});

const sql = 'SELECT COUNT(TABLE_NAME) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = "PlexRequests"';

const holder = [];

connection.query(sql, holder, (err, results) => {
	if (err) throw err;
	holder.push(results = results.map(v => Object.assign({}, v)));
	console.log(holder);
});

connection.end((err) => {
	if (err) throw err;
	console.log('Connection closed');
});