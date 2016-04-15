// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import FilterBox from './components/filterBox';
import JobPage from './components/jobPage';
import InfoBox from './components/infoBox';
import CompanyBox from './components/companyBox';
import PostingCollection from './collections/postingCollection'
import unicornJobs from './unicornJobs'
import JobForm from './components/jobForm'

import App from './app.js';



// let jobPostings = new PostingCollection();

const Container = React.createClass({
	render: function() {
		return (<div className="container">
			<Header />
			<div className="main-content">
				<FilterBox />
				<JobPage jobPosts={this.props.jobData}/>
				<JobForm />
			</div>
			<aside>
				<InfoBox />
				<CompanyBox />
			</aside>
		</div>);
	}
});

ReactDOM.render(<Container jobData={JobForm}/>, document.querySelector('main'));
