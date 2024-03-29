//module imports
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
//page imports
import './App.css';
import Navbar from './components/NavbarContainer';
import Signup from './components/Signup';
import HomeLoggedOut from './components/HomeLoggedOut';
import Search from './components/Search';
import Login from './components/Login';
import PlaylistPage from './components/PlaylistPage';
import HomeLoggedIn from './components/HomeLoggedIn';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Navbar />}>
			<Route index element={<HomeLoggedOut />} />
			<Route path='search' element={<Search />} />
			<Route path='playlists' element={<PlaylistPage />} />
			<Route path='signup' element={<Signup />} />
			<Route path='/loggedin' element={<HomeLoggedIn />} />
			<Route path='login' element={<Login />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
