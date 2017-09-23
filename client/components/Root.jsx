import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Main from './Main.jsx';
import CriteriaList from './CriteriaList.jsx';

class Root extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}	

export default Root;