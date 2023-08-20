import '../component_css/Login.css';
import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username, password);
	};

	return (
		<Form onSubmit={handleSubmit}>
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

			<Button variant='primary' type='submit'>
				Log In
			</Button>
		</Form>
	);
}

export default LoginForm;
