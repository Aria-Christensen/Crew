var mariadb = require('mariadb');

var pool = mariadb.createPool({
	host: "127.0.0.1",
	port: 3306,
	user: "myCode",
	password: "auiemc196",
	database: "test"
});

module.exports = Object.freeze({
	pool: pool
});
