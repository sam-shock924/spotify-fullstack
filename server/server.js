const express = require('express');
const app = express();
const port = 3000;

app.get('/api/', (req, res) => {
	res.send('Hello Spotify!');
});

app.get('/api/loggedin', (req, res) => {
	const response = {
		name: 'John',
	};

	res.send(response);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
