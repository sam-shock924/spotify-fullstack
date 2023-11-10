import PlaylistTable from './PlaylistTable';
import axios from 'axios';
import {useEffect} from 'react';

export default function PlaylistPage() {
	/*
	add:
	- if no playlists created, show prompt to create your first playlist
	- button to create playlist and redirects to search page or modal to do the same??
	- if playlists are created, show table/card list of playlists
	- playlists will show on dropdown of songs
	- songs will link directly to the song to be played on spotify website or app if they have it downloaded
	*/

	//below is test code to see if axios is working

	/*
	useEffect(() => {
		axios.get('/api/playlist').then((res) => {
			console.log(res.data);
		});
	});

	function getData() {
		axios
			.get('/api/playlist')
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
*/

	return (
		<div>
			<h1>Your Playlists</h1>
			{/* <button onClick={getData()}>test</button> */}
			<PlaylistTable />
		</div>
	);
}
