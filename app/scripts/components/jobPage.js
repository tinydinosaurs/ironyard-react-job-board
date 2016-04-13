import React from 'react';
import JobRow from './jobRow'

const JobPage = React.createClass({
	render: function() {
	 	
		let jobRows = this.props.jobPosts.map((job, index, array) => {
			return (
				<JobRow 
				date={job.date}
				title={job.title}
				company={job.company}
				location={job.location}
				description={job.description}
				/>
				)
		});


	 console.log(this.props);
	 return (
	 	<div>{jobRows}</div>
	 	)}
});

export default JobPage