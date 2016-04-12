import React from 'react';

const JobForm = React.createClass({
	render: function() {
		return (
			<form>
				<p>Post Your Job</p>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" placeholder="Title" />
					
					<label htmlFor="company-name">Company Name</label>			
					<input type="text" id="company-name" placeholder="Company Name" />
					
					<label htmlFor="location">Location</label>			
					<input type="text" id="location" placeholder="Location" />
					
					<label htmlFor="description">Description</label>			
					<input type="textarea" id="description" placeholder="Description" />

					<label htmlFor="tags">Tags</label>			
					<input type="text" id="tags" placeholder="Tags" />
				

				<button type="submit">Submit Job</button>
			</form>
		);
	}
});

export default JobForm