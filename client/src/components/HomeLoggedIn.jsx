import {useState, useEffect} from 'react';
import '../component_css/HomeLoggedIn.css';
import PlaylistTable from './PlaylistTable';
import axios from 'axios';

export default function HomeLoggedIn() {
	const [token, setToken] = useState('');
	const [name, setName] = useState('');
	const clientid = '7880e85c264046a998e4648eb7025ce5';
	const clientsecret = 'ee54b02a846a41b4ba370b2b913e598c';

	useEffect(() => {
		axios
			.get('/api/loggedin')
			.then((response) => {
				const data = response.data;
				setName(data.name);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	//token call works here, not sure how to get it to work on the backend
	useEffect(() => {
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
			const fetchTokenCall = await axios(tokenParams).then((res) =>
				setToken(res.data.access_token)
			);
		}
		getToken();
	}, []);

	console.log(token);

	// this is me trying to get it to work on the backend

	// useEffect(() => {
	// 	const fetchToken = async () => {
	// 		const tokenRes = await axios.get('/api/token');
	// 		setToken(tokenRes.data);
	// 	};
	// 	fetchToken();
	// }, []);

	// useEffect(() => {
	// 	console.log(token);
	// }, [token]);

	// console.log(name);
	return (
		<div className='home-logged-in-container'>
			<div className='home-logged-in-title-container'>
				<h3 className='home-logged-in-title1'>Welcome to</h3>
				<h1 className='home-logged-in-title2'>{`your Spotify, ${name}!`}</h1>
			</div>
			<div>
				<PlaylistTable />
			</div>
		</div>
	);
}
