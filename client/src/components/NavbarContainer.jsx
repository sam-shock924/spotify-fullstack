import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container} from 'react-bootstrap';

const NavbarContainer = () => {
	return (
		<Navbar className='bg-body-tertiary'>
			<Container>
				<Navbar.Brand href='#home' expand='lg'>
					<img
						alt=''
						src='/spotify-logo-orange.png'
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					Home
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default NavbarContainer;
