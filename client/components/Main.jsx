import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import MapBox from './MapBox.jsx';
import SearchResults from './SearchResults.jsx';
import SearchField from './SearchField.jsx';
import Logo from './Logo.jsx';

function Main(props) {
	return (
        <div>
        	<div id="sidebar">
        		<Logo />
        		<SearchField />
        		<SearchResults />
          	</div>
        	<div>
        		<MapBox />
        	</div>
        </div>
	);
}	

export default Main;