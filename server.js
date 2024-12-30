const express = require('express')
const db = require('./db')
const app = express()
const port = 8080
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/helloWorld', async (req, res) => {
	try {
		const result = await db.pool.query("select content, username from helloWorld where id=3");
		res.send(result);
	} catch (err) {
		throw err;
	}
});

app.get('/test', async(req, res) => {
	try {
		const result = "Hello, my name is Maria";
		res.send(result);
	} catch (err) {
		throw (err); 
	}
});

app.post('/helloWorld', async (req, res) => {
	let helloWorld = req.body;
	try {
		const result = await db.pool.query("insert into helloWorld (username, content), values (?)", [helloWorld.username, helloWorld.content]);
		res.send(result);
	} catch (err) {
		throw err;
	}
});

app.put('/helloWorld', async (req, res) => {
	let helloWorld = req.body;
	try {
		const result = await db.pool.query("update helloWorld set username = ?, content = ? where ud = ?", [helloWorld.username, helloWorld.content, helloWorld.id]);
		res.send(result);
	} catch (err) {
		throw err;
	}
});

app.delete('/helloWorld', async (req, res) => {
	let id = req.query.id;
	try {
		const result = await db.pool.query("delete from helloWorld where id = ?", [id]);
		res.send(result);
	} catch (err) {
		throw err;
	}
});

app.listen(port, () => console.log('Listening on port ${port}'));
