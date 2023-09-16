import {Table} from 'react-bootstrap';

import '../component_css/HomeLoggedOut.css';

export default function HomeLoggedIn() {
	return (
		<div className='home-logged-in-container'>
			<div className='home-logged-in-title-container'>
				<h3 className='home-logged-in-title1'>Welcome to</h3>
				<h1 className='home-logged-in-title2'>Your Spotify!</h1>
			</div>
			<div>
				<Table>Hello</Table>
			</div>
		</div>
	);
}
