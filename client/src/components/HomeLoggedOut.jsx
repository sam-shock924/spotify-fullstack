import {Button} from 'react-bootstrap';
import '../component_css/HomeLoggedOut.css';

export default function HomeLoggedOut() {
	return (
		<div className='home-logged-out-container'>
			<div className='home-logged-out-title-container'>
				<h3 className='home-logged-out-title1'>Welcome to</h3>
				<h1 className='home-logged-out-title2'>Your Spotify!</h1>
			</div>
			<Button className='home-logged-out-button'>Sign Up</Button>
			<Button className='home-logged-out-button'>Log In</Button>
		</div>
	);
}
