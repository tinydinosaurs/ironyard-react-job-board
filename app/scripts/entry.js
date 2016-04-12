// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import FilterBox from './components/filterBox';
import JobPage from './components/jobPage';
import InfoBox from './components/infoBox'
import CompanyBox from './components/companyBox'


const Container = React.createClass({
	render: function() {
		return (<div className="container">
			<Header />
			<FilterBox />
			<JobPage />
			<aside>
				<InfoBox />
				<CompanyBox />
			</aside>
		</div>);
	}
});

ReactDOM.render(<Container />, document.querySelector('main'));