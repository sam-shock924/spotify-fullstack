import '../component_css/Login.css';
import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
	};

	return (
		<Form className='spotify-form' onSubmit={handleSubmit}>
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
			<Form.Group controlId='password'>
				<Form.Label>Re-Enter Password</Form.Label>
				<Form.Control
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter password'
				/>
			</Form.Group>

			<Form.Text>
				Please use a combination of letters, numbers, and special characters
				such as !?_*#$%
			</Form.Text>
			<Button className='spotify-button' type='submit'>
				Log In
			</Button>
		</Form>
	);
}

export default LoginForm;

// export default LoginForm;
