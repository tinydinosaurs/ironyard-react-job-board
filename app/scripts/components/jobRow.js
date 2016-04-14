import React from 'react';
import unicornJobs from './../unicornJobs'

// import PostingCollection from './collections/postingCollection'
// import unicornJobs from './unicornJobs'


const JobRow = React.createClass({
	render: function() {
		return (
			<div className="job-post">
				<span className="date-posted">{this.props.date}</span>
				<h2>{this.props.title}</h2>
				<p className="company-info"><span className="emphasis">{this.props.company}</span> &middot; {this.props.location}</p>
				<p className="job-description">{this.props.description}</p>
				<p>
					<span className="skill">{this.props.tags}</span>
				</p>	
			</div>
			);
	}
});

export default JobRow