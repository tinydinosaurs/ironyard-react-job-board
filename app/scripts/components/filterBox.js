import React from 'react';

const FilterBox = React.createClass({
	render: function() {
		return (
			<form>
				<div>
					<label htmlFor="keyword">Keyword</label>
					<input type="text" id="keyword" placeholder="keyword" />
				</div>
				<div>
					<label htmlFor="location">Location</label>			
					<input type="text" id="location" placeholder="location" />
				</div>
				<button type="submit">Search</button>
			</form>
		);
	}
});

export default FilterBox