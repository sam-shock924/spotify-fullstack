import '../component_css/Signup.css';
import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function SignupForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
	};

	//change password prompt on hover or onChange
	return (
		<Form className='create-login-form' onSubmit={handleSubmit}>
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
			<Button className='create-login-button' type='submit'>
				Log In
			</Button>
		</Form>
	);
}

export default SignupForm;
