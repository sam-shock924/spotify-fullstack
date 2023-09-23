import React from 'react';
import Table from 'react-bootstrap/Table';
import '../component_css/Playlisttable.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function PlaylistTable() {
	return (
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
	);
}
