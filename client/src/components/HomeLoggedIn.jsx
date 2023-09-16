import '../component_css/HomeLoggedIn.css';
import Table from 'react-bootstrap/Table';
export default function HomeLoggedIn() {
	return (
		<div className='home-logged-in-container'>
			<div className='home-logged-in-title-container'>
				<h3 className='home-logged-in-title1'>Welcome to</h3>
				<h1 className='home-logged-in-title2'>Your Spotify!</h1>
			</div>
			<div>
				<Table
					striped
					bordered
					hover
					variant='dark'
					className='home-logged-in-table'
				>
					<thead>
						<tr>
							<th>Playlist Name</th>
							<th>Date Created</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Playlist 1</td>
							<td>08-01-2023</td>
							<td>*insert 'add to playlist' button*</td>
						</tr>
						<tr>
							<td>Playlist 2</td>
							<td>08-05-2023</td>
							<td>*insert 'add to playlist' button*</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}
