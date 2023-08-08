const express = require('express');
const app = express();
const port = 5173;

app.get('/', (req, res) => {
	res.send('Hello Spotify!');
});

app.get('/api/name', (req, res) => {
	console.log('Sam is awesome');
	const response = {
		name: 'Sam',
	};

	res.send(response);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
