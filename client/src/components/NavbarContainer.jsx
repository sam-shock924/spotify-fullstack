import {Outlet, NavLink} from 'react-router-dom';
import '../component_css/NavbarContainer.css';

const NavbarContainer = () => {
	return (
		<>
			<div className='navbar-container'>
				<div className='navbar-home-container'>
					<NavLink to='/' className='navbar-home'>
						<img alt='' src='/spotify-logo-orange.png' width='45' height='45' />
					</NavLink>
				</div>
				<div className='navbar-links-container'>
					<NavLink className='navbar-links' to='search'>
						Search
					</NavLink>
					<NavLink className='navbar-links' to='playlists'>
						Playlists
					</NavLink>
					<NavLink className='navbar-links' to='user-data'>
						User placeholder
					</NavLink>
				</div>
			</div>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default NavbarContainer;
