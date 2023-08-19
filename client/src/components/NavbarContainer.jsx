import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container} from 'react-bootstrap';
import '../component_css/NavbarContainer.css';

const NavbarContainer = () => {
	return (
		<Navbar className='navbar'>
			<Container>
				<Navbar.Brand href='#home' className='navbar-home'>
					<img alt='' src='/spotify-logo-orange.png' width='45' height='45' />{' '}
					Home
				</Navbar.Brand>
				<Nav>Search</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarContainer;
