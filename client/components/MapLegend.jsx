import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { MapControl } from 'react-leaflet';

class MapLegend extends MapControl {  // note we're extending MapControl from react-leaflet, not Component from react

  constructor(props) {
    super(props)

    this.state = {
      criteria: props.criteria || []
    }

    this.renderLegend = this.renderLegend.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('I received new props!')
    console.log(nextProps)
    this.setState({ criteria: nextProps.criteria })
    this.renderLegend();
  }

  componentWillMount() {
    this.renderLegend();
  }

  renderLegend() {
    console.log('inside render legend')
    const legendEntries = this.state.criteria.map((criterion, idx) => {
      console.log('hitting legend entry', criterion.text)
      const fillColor = { background: criterion.color };
      return <div key={idx} className="legend-entry">
          <div className="color-box" style={fillColor}></div>
          <div className="legend-title">{criterion.text}</div>
        </div>;
    })

    const centerControl = L.control({position: 'bottomright'});  
    const jsx = (
      <div id="legend">
          { legendEntries }
      </div>
      
    );

    centerControl.onAdd = function(map) {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = centerControl;
  }
}

export default MapLegend;