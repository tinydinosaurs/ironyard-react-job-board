import logo from './../../assets/logo.png'
import React from 'react';

const Header = React.createClass({
	render: function() {
		let freshJobsNav = [
			<a href="#" key="1">Jobs</a>,
			<a href="#" key="2">Companies</a>,
			<a href="#" key="3">Cities</a>,
			<a href="#" key="4">Why Freshjobs?</a>,
			<a href="#" key="5">Jobs</a>
		];

		return (
			<header>
				<div className="logo-area">
					<img src={logo} />
					<h1>Fresh Jobs</h1>
				</div>
				<nav>
					{freshJobsNav}
				</nav>

			</header>
		);
	}
});

export default Header