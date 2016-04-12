import React from 'react';

const FilterBox = React.createClass({
	render: function() {
		return (
			<form>
				<label htmlFor="keyword">Keyword</label>
				<input type="text" id="keyword" placeholder="keyword" />
				<label htmlFor="location">Location</label>			
				<input type="text" id="location" placeholder="location" />
				<button type="submit">Search</button>
			</form>
		);
	}
});

export default FilterBox