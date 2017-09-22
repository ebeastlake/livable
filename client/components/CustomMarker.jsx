import React from 'react';
import ReactDOM from 'react-dom';
import { Marker, Popup, Polygon } from 'react-leaflet';

function CustomMarker(props) {
	console.log('props.polygon')
	console.log(props.polygon)
	return (
		<div>
			<Marker position={props.position}>
				<Popup>
	            	<span>{props.info.name}<br/>{props.info.address}</span>
	          	</Popup>
			</Marker>
			<Polygon positions={props.polygon} color="red" />
			{
				props.polygon.map((position, idx) => {
					<Marker key={idx} position={position}></Marker>
				})
			}
		</div>
	);
}	

export default CustomMarker;