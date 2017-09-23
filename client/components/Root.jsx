import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Main from './Main.jsx';
import MapBox from './MapBox.jsx';
import CriteriaList from './CriteriaList.jsx';
import SearchField from './SearchField.jsx';

class Root extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Main />
				<CriteriaList />
				<SearchField />
				<MapBox />
			</div>
		);
	}
}	

export default Root;