/* eslint-disable indent */
const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
	user: process.env.MYSQL_USERNAM,
	password: process.env.MYSQL_PASSWORD,
});

const sql = 'SELECT COUNT(TABLE_NAME) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = "PlexRequests"';

con.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
	con.query(sql, function(err, result) {
		if (err) throw err;
            console.log(result);
	});
    con.end();
});
