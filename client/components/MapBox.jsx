import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';
import CustomMarker from './CustomMarker.jsx';
const position = [40.736467, -74.033760];

class MapBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			places: this.props.places
		};

	}

	componentWillReceiveProps(nextProps) {
		this.setState({places: nextProps.places})
	}

	render() {
		return (
			<div>
				<h1>liv·a·ble: (of an environment or climate) fit to live in</h1>
				<Map style={{height: "100vh"}} center={position} zoom={13}>
					<TileLayer
						url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWJlYXN0bGFrZSIsImEiOiJjajd1bXJyejk0OHRxMnhwa3l1ZXVvOXY2In0.8jJCGfw_ynmjZ_4PQ4sU7g"
						attribution="OpenStreetMap"
					/>
					{this.state.places.map((place, idx) => {
						const position = [place.location.lat, place.location.lng];
						const info = {name: place.name, address: place.address};
						const polygon = place.polygon;
						return (<CustomMarker key={`marker${idx}`} position={position} polygon={polygon} info={info} />);
					})}

				</Map>
			</div>
		);
	}
}	

const mapStateToProps = function(state) {
	// const markers = state.places.map(place => {
	// 	return [place.location.lat, place.location.lng];
	// });
	// console.log(markers)
	// console.log(markers || [[40.736467, -74.033760]])

	return {
		// markers: markers
		places: state.places
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MapBox);