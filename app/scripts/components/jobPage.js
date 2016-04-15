import React from 'react';
import JobRow from './jobRow';
import unicornJobPosts from './../collections/postingCollection';


const JobPage = React.createClass({
	
	getInitialState: function() {
		return {unicornJobs: []}
	},

	componentDidMount: function() {
		unicornJobPosts.on('add', () => {
			this.setState({unicornJobs: unicornJobPosts})
		});
		unicornJobPosts.fetch();
	},

	render: function() {
	 	
		const jobRows = unicornJobPosts.map((job, index, array) => {
			return (
				<JobRow 
				key={job.get('_id')}
				date={job.get('date')}
				title={job.get('title')}
				company={job.get('company')}
				location={job.get('location')}
				description={job.get('description')}
				tags={job.get('tags')}
				/>
				)
		});


	 // console.log(this.props);
	 return (
	 	<div>{jobRows}</div>
	 	)}
});

export default JobPage