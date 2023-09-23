import '../component_css/HomeLoggedIn.css';
import PlaylistTable from './PlaylistTable';

export default function HomeLoggedIn() {
	return (
		<div className='home-logged-in-container'>
			<div className='home-logged-in-title-container'>
				<h3 className='home-logged-in-title1'>Welcome to</h3>
				<h1 className='home-logged-in-title2'>Your Spotify!</h1>
			</div>
			<div>
				<PlaylistTable />
			</div>
		</div>
	);
}
