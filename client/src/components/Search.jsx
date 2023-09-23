export default function Search() {
	return (
		<div>
			<h1>Search Page</h1>
			<form className='search-input'>
				<input
					id='search-value'
					type='text'
					// value={query}
					// onChange={handleQuery}
					placeholder='Search...'
				/>
				<select
					// value={queryType}
					// onChange={handleQueryType}
					name='default'
					id='select-options'
				>
					Search for...
					<option value='placeholder'>Search for...</option>
					<option value='artist'>Artist</option>
					<option value='album'>Album</option>
					<option value='track'>Song</option>
				</select>
				<button type='submit'>Search</button>
			</form>
			{/* <Output queryList={queryList} /> */}
		</div>
	);
}
