import React from 'react';

const InfoBox = React.createClass({
	render: function() {
		return (
			<div className="info-box">
				<h2>Looking for a job?</h2>
				<hr />
				<p>Create a Fresh Jobs profile and <span className="emphasis">let employers come to you</span>.</p>
				<ul>
					<li>Employers search our database and contact you</li>
					<li>Import easily from LinkedIn</li>
					<li>Link to Stack Overflow, Github, Codeplex, and more</li>
				</ul>
				<button className="create-profile" type="submit">Create a Profile</button>
			</div>
		);
	}
});

export default InfoBox