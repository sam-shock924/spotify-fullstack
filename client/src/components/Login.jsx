import {Form, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import '../component_css/Login.css';

export default function Login() {
	/*
	add: 
	- username input and label
	- password input and label
	- login button
	- redirect to playlists page
	*/
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
	};

	return (
		<Form className='login-form' onSubmit={handleSubmit}>
			<Form.Group className='login-username'>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Enter username'
				/>
			</Form.Group>
			<Form.Group className='login-password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter password'
				/>
			</Form.Group>
			<NavLink to='/loggedin' className='login-button' type='submit'>
				Log in
			</NavLink>
		</Form>
	);
}
