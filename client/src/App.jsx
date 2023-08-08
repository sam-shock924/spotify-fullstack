import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [name, setName] = useState('Unknown');

	useEffect(() => {
		axios.get('/api/name').then((response) => {
			setName(response.data.name);
		});
	}, []);

	return (
		<>
			<p>{name} is the best</p>
		</>
	);
}

export default App;
