const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

//GET
app.get('/message', async (req, res) => {
	try {
		const result = await db.pool.query("select content, username from helloWorld where id=3");
		res.json(result);
	} catch (err) {
		throw err;
	}
});

app.get('/helloWorld', (req, res) => {
	try {
	res.send({message: "I am your backend."});
	} catch (err) {
		throw err;
	}
});

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});
