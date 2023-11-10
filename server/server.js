const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/api/', (req, res) => {
	res.send('Hello Spotify!');
});

app.get('/api/loggedin', (req, res) => {
	const response = {
		name: 'Sam',
	};
	res.send(response);
});

//test api call, will be replaced with spotify api call
app.get('/api/playlist', (req, res) => {
	axios
		.get('http://swapi.dev/api/planets/1/')
		.then((axiosResponse) => res.send(axiosResponse.data));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

/*



*/
