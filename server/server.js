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
//cant get token to send to front end
app.get('/api/token', (req, res) => {
	let tokenParams = {
		method: 'POST',
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: new URLSearchParams({
			grant_type: 'authorization_code',
			client_id: clientid,
			client_secret: clientsecret,
		}),
	};
	async function getToken() {
		const fetchToken = axios(tokenParams)
			.then((tokenRes) => res.send(tokenRes.data))
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

//test api call, will be replaced with spotify api call
// app.get('/api/playlist', (req, res) => {
// 	axios
// 		.get('http://swapi.dev/api/planets/1/')
// 		.then((axiosResponse) => res.send(axiosResponse.data));
// });

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
