import React from 'react';

const JobRow = React.createClass({
	render: function() {
		return (
			<div className="job-post">
				<span className="date-posted">yesterday</span>
				<h2>Senior Front End Engineer</h2>
				<p className="company-info"><span className="emphasis">NSONE</span> &middot; New York, NY</p>
				<p className="job-description">Seeking a front end unicorn to do all the things. And make us coffee.</p>
				<p>
					<span className="skill">angular.js</span>
					<span className="skill">d3.js</span>
					<span className="skill">javascript</span>
					<span className="skill">ui</span>
					<span className="skill">css</span>
				</p>	
			</div>
			);
	}
});

export default JobRow