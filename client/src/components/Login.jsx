import {Form, Button} from 'react-bootstrap';
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
			<Form.Group controlId='username'>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Enter username'
				/>
			</Form.Group>
			<Form.Group controlId='password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter password'
				/>
			</Form.Group>
			<Button className='login-button' type='submit'>
				Log in
			</Button>
		</Form>
	);
}
