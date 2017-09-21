import React from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
const position = [37.07, -95.95];

class MapBox extends React.Component {

	constructor(props) {
		super(props)

	}

	render() {

		return (
			<div>
				<h1>Hello World!</h1>
				<Map style={{height: "100vh"}} center={position} zoom={4}>
					<TileLayer
						url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWJlYXN0bGFrZSIsImEiOiJjajd1bXJyejk0OHRxMnhwa3l1ZXVvOXY2In0.8jJCGfw_ynmjZ_4PQ4sU7g"
						attribution="OpenStreetMap"
					/>
				</Map>
			</div>
		);
	}
}	

export default MapBox;