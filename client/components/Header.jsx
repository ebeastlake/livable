import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from './SearchField.jsx';

function Header(props) {
	return (
		<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">liv·a·ble: (of an environment or climate) fit to live in</a>
				</div>
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="about-btn"><i className="fa fa-question-circle white" />&nbsp;&nbsp;About</a></li>
						<li className="hidden-xs"><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="list-btn"><i className="fa fa-list white" />&nbsp;&nbsp;Criteria List</a></li>
						<li><a id="downloadDrop" href="#" role="button" data-toggle="dropdown"><i className="fa fa-cloud-download white" />&nbsp;&nbsp;Download</a></li>
					</ul>
					<SearchField />
				</div>
			</div>
		</div>
	);
}

export default Header;