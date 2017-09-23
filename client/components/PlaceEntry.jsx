import React from 'react';
import ReactDOM from 'react-dom';

function PlaceEntry(props) {

      const fillColor = {
            background: props.place.color
      };

	return (
		<tr className="feature-row">
      		<td>
      			<div className="color-box" style={fillColor}></div>
      		</td>
      		<td className="feature-name">{props.place.name}</td>
      		<td>
      			<i className="fa fa-trash" />
      		</td>
      	</tr>
	)
}

export default PlaceEntry;