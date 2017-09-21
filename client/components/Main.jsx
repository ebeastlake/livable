import React from 'react';
import ReactDOM from 'react-dom';

import MapBox from './MapBox.jsx';
import InputForm from './InputForm.jsx';

class Main extends React.Component {

	render() {
		return (
			<div>
				<InputForm />
				<MapBox />
			</div>
		);
	}
}	

export default Main;