import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import MapBox from './MapBox.jsx';
import Sidebar from './Sidebar.jsx';

function Main(props) {
	return (
        <div id="container">
          <Sidebar />
          <div>
          	<MapBox />
          </div>
        </div>
	);
}	

export default Main;