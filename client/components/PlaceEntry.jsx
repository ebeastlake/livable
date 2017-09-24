import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deletePlace } from '../reducer/places';

class PlaceEntry extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  showModal: false
            };

            this.handleClick = this.handleClick.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
      }

      handleClick(event) {
            console.log('tried to click');
            console.log(this.props.place.location);
            this.props.deleteEntry(this.props.place.location);
      }

      toggleModal(event) {
            this.setState({ showModal: !this.state.showModal });
      }

      render() {
            const fillColor = { background: this.props.place.color };

            return (
                  <div>
                  <tr className="feature-row">
                        <td>
                              <div className="color-box" style={fillColor}></div>
                        </td>
                        <td className="feature-name" onClick={this.toggleModal}>{this.props.place.name}</td>
                        <td>
                              <i className="fa fa-trash pull-right" onClick={this.handleClick}/>
                        </td>
                  </tr>
                  {
                        this.state.showModal ? 
                              <div className="modal fade in" id="featureModal" tabIndex={-1} role="dialog" style={{display: 'block'}}>
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button className="close" type="button" data-dismiss="modal" aria-hidden="true" onClick={this.toggleModal}>×</button>
                                      <h4 className="modal-title text-primary" id="feature-title">{this.props.place.name}</h4>
                                    </div>
                                    <div className="modal-body" id="feature-info"><table className="table table-striped table-bordered table-condensed"><tbody><tr><th>Name</th><td>{this.props.place.name}</td></tr><tr><th>Phone</th><td>(212) 254-4370</td></tr><tr><th>Address</th><td>{this.props.place.address}</td></tr><tr><th>Website</th><td><a className="url-break" href="http://www.newyorkcitytheatre.com/theaters/astorplacetheater/theater.php" target="_blank">http://www.newyorkcitytheatre.com/theaters/astorplacetheater/theater.php</a></td></tr></tbody></table><table /></div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        : ""

                  }
                  </div>
            )

      }

}

const mapStateToProps = null;

const mapDispatchToProps = function(dispatch) {
      return {
            deleteEntry: function(location) {
                  const action = deletePlace(location);
                  dispatch(action);
            }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceEntry);