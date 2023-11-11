import {useState, useEffect} from 'react';
import '../component_css/HomeLoggedIn.css';
import PlaylistTable from './PlaylistTable';
import axios from 'axios';

export default function HomeLoggedIn() {
	const [name, setName] = useState('');
	const clientId = import.meta.env.VITE_CLIENT_ID;

	useEffect(() => {
		axios
			.get('/api/loggedin')
			.then((response) => {
				const data = response.data;
				setName(data.name);
				console.log(clientId);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	console.log(name);
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
