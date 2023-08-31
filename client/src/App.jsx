import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/NavbarContainer';
import Signup from './components/Signup';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import PlaylistPage from './components/PlaylistPage';

//server test data

// function App() {
// 	const [name, setName] = useState('Unknown');

// 	useEffect(() => {
// 		axios.get('/api/name').then((response) => {
// 			setName(response.data.name);
// 		});
// 	}, []);

// 	return (
// 		<>
// 			<p>{name} is the best</p>
// 		</>
// 	);
// }

function App() {
	return (
		<BrowserRouter>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='search' element={<Search />} />
					<Route path='playlists' element={<PlaylistPage />} />
					<Route path='signup' element={<Signup />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
