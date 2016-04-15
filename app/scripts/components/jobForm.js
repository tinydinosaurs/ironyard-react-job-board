import React from 'react';
import PostingCollection from './../collections/postingCollection'



const JobForm = React.createClass({
	submitUnicornJob: function(e) {
		e.preventDefault();
		let newUnicornJob = {
		title: this.refs.title.value,
		company: this.refs.company.value,
		location: this.refs.location.value,
		description: this.refs.description.value,
		tags: this.refs.tags.value
		};
		PostingCollection.create(newUnicornJob);
		this.setState({
			title: '',
			company: '',
			location: '',
			description: '',
			tags: ''
		})

	},

	render: function() {
		return (
			<form onSubmit={this.submitUnicornJob}>
				<p>Post Your Job</p>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" placeholder="Title" ref="title" />
					
					<label htmlFor="company-name">Company Name</label>			
					<input type="text" id="company-name" placeholder="Company Name" ref="company" />
					
					<label htmlFor="location">Location</label>			
					<input type="text" id="location" placeholder="Location" ref="location" />
					
					<label htmlFor="description">Description</label>			
					<input type="textarea" id="description" placeholder="Description" ref="description" />

					<label htmlFor="tags">Tags</label>			
					<input type="text" id="tags" placeholder="Tags" ref="tags" />
				

				<button type="submit">Submit Job</button>
			</form>
		);
	}
});

export default JobForm