import React from 'react';
import ReactDOM from 'react-dom';
import { Marker, Popup } from 'react-leaflet';

function CustomMarker(props) {
	console.log('props received')
	console.log(props)
	return (
		<Marker position={props.position}>
			<Popup>
            	<span>{props.info.name}<br/>{props.info.address}</span>
          	</Popup>
		</Marker>
	);
}	

export default CustomMarker;