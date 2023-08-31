import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/NavbarContainer';
import Signup from './components/Signup';
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import PlaylistPage from './components/PlaylistPage';
import NavbarContainer from './components/NavbarContainer';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Navbar />}>
			<Route index element={<Home />} />
			<Route path='search' element={<Search />} />
			<Route path='playlists' element={<PlaylistPage />} />
			<Route path='signup' element={<Signup />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
