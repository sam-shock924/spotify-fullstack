import PlaylistTable from './PlaylistTable';

export default function PlaylistPage() {
	/*
	add:
	- if no playlists created, show prompt to create your first playlist
	- button to create playlist and redirects to search page or modal to do the same??
	- if playlists are created, show table/card list of playlists
	- playlists will show on dropdown of songs
	- songs will link directly to the song to be played on spotify website or app if they have it downloaded
	*/

	return (
		<div>
			<h1>Your Playlists</h1>
			<PlaylistTable />
		</div>
	);
}
