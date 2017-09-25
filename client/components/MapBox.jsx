import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';
import CustomMarker from './CustomMarker.jsx';
import MapLegend from './MapLegend.jsx';

class MapBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			places: this.props.places,
			criteria: this.props.criteria,
			location: this.props.location
		};

	}

	componentWillReceiveProps(nextProps) {
		this.setState({criteria: nextProps.criteria});
		this.setState({places: nextProps.places});
		this.setState({location: nextProps.location});
	}

	render() {
		return (
				<Map style={{height: "100vh"}} center={[this.state.location.lat, this.state.location.lng]} zoom={13}>
					{/*
						this.state.criteria.length ? 
							<MapLegend criteria={this.state.criteria}/>
						:
							""
					*/}
					<TileLayer
						url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWJlYXN0bGFrZSIsImEiOiJjajd1bXJyejk0OHRxMnhwa3l1ZXVvOXY2In0.8jJCGfw_ynmjZ_4PQ4sU7g"
						attribution="OpenStreetMap"
					/>
					{this.state.places.map((place, idx) => {
						const position = [place.location.lat, place.location.lng];
						const info = {name: place.name, address: place.address};
						const polygon = place.polygon;
						const color = place.color;
						return (<CustomMarker key={`marker${idx}`} position={position} polygon={polygon} info={info} color={color}/>);
					})}

				</Map>
		);
	}
}	

const mapStateToProps = function(state) {
	const location = Object.keys(state.location).length ? state.location : {lat: 40.736467, lng: -74.033760};
	return {
		places: state.places,
		criteria: state.criteria,
		location: location
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MapBox);