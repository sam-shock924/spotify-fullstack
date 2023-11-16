const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
require('dotenv').config();

app.get('/api/', (req, res) => {
	res.send('Hello Spotify!');
});

//get authorization token from spotify
app.get('/api/token', (req, res) => {
	let tokenParams = {
		method: 'POST',
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: process.env.VITE_CLIENT_ID,
			client_secret: process.env.VITE_CLIENT_SECRET,
		}),
	};
	async function getToken() {
		const fetchToken = await axios(tokenParams)
			.then((tokenRes) => res.send(tokenRes.data.access_token))
			.catch((err) => console.log(err));
	}
	getToken();
});

app.get('/api/loggedin', (req, res) => {
	const response = {
		name: 'Sam',
	};
	res.send(response);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
