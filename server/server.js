const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const clientid = '7880e85c264046a998e4648eb7025ce5';
const clientsecret = 'ee54b02a846a41b4ba370b2b913e598c';

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
			client_id: clientid,
			client_secret: clientsecret,
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
