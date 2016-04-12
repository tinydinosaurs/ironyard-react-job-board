import React from 'react';
import JobRow from './jobRow'

const JobPage = React.createClass({
	render: function() {
		let jobPosts = [
				<JobRow key="1" />,
				<JobRow key="2" />,
				<JobRow key="3" />,
				<JobRow key="4" />,
				<JobRow key="5" />,
				<JobRow key="6" />
			];
		return (
			<div className="job-page">
				{jobPosts}
			</div>
			);
	}
});

export default JobPage