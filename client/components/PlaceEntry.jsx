import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import deletePlace from '../reducer/places';

function PlaceEntry(props) {

      const fillColor = {
            background: props.place.color
      };

      function handleClick(event) {
            console.log('tried to click');
            console.log(props.place.location);
            props.deleteEntry(props.place.location);
      }

	return (
		<tr className="feature-row">
      		<td>
      			<div className="color-box" style={fillColor}></div>
      		</td>
      		<td className="feature-name">{props.place.name}</td>
      		<td>
      			<i className="fa fa-trash" onClick={handleClick}/>
      		</td>
      	</tr>
	)
}

const mapStateToProps = null;

const mapDispatchToProps = function(dispatch) {
      return {
            deleteEntry: function(location) {
                  console.log('trying to delete entry', location);
                  const action = deletePlace(location);
                  console.log('action in delete entry')
                  console.log(action)
                  dispatch(action);
            }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceEntry);