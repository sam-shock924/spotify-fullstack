import '../component_css/Signup.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

function SignupForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle signup logic here
	};

	//change password prompt to on hover or onChange
	return (
		<Form className='create-signup-form' onSubmit={handleSubmit}>
			<Form.Group className='signup-username'>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Enter username'
				/>
			</Form.Group>
			<Form.Group className='signup-password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter password'
				/>
			</Form.Group>
			<Form.Group className='signup-password'>
				<Form.Label>Re-Enter Password</Form.Label>
				<Form.Control
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter password'
				/>
			</Form.Group>
			{/* <Form.Text>
				Please use a combination of letters, numbers, and special characters
				such as !?_*#$%
			</Form.Text> */}
			<NavLink to='/loggedin' className='create-signup-button' type='submit'>
				Sign Up
			</NavLink>
		</Form>
	);
}

export default SignupForm;
