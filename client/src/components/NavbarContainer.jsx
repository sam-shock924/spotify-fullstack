import {Outlet, NavLink} from 'react-router-dom';
// import '../component_css/NavbarContainer.css';

const NavbarContainer = () => {
	return (
		<div>
			<NavLink to='/' className='navbar-home'>
				<img alt='' src='/spotify-logo-orange.png' width='45' height='45' />{' '}
				Home
			</NavLink>
			<NavLink to='search'>Search</NavLink>
			<NavLink to='playlists'>Playlists</NavLink>
			<NavLink to='user-data'>User placeholder</NavLink>{' '}
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default NavbarContainer;
