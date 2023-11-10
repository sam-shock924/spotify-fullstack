import {Form, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import '../component_css/Login.css';

/*

User authentication:
- login page (client side)
- api endpoint (serverside)
- database role

client http get('/api/todos?user_id=321) => server tcp (SELECT * FROM todos WHERE user_id = 321) => database

- login query form
	- will be a http post request with a json string of username/password 
	- connect to tcp database and search for same information
	- write server code where if http request password === database password then return user id
	- saves user id in local storage to make get requests for data

- create login form
- send http post request on submit (client)
- query database for matching username (server/database)
- check if password match (server)
- return user id to client (server)
- redirect to home page (client)

*/

export default function Login() {
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
