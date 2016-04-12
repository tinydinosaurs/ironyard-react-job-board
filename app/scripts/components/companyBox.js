import React from 'react';
import featuredLogo from './../../assets/featured-logo.jpg'


const CompanyBox = React.createClass({
	render: function() {
		return (
			<div className="company-box">
				<h2>Company Information</h2>
				<hr />
				<div className="logo-box">
					<img src={featuredLogo} />
				</div>
				<div className="company-info">
					<p className="featured-name">MaxPlay</p>
					<p className="featured-location">Austin, TX</p>
				</div>
			</div>
			);

	}
});

export default CompanyBox