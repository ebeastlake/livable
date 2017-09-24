import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Header from './Header.jsx'
import PlaceEntry from './PlaceEntry.jsx';

function SearchResults(props) {

      const placeList = props.places.map((place, idx) => {
            return <PlaceEntry key={idx} place={place} />;
      });

	return (
            <div className="search-results">
              <div className="panel panel-default" id="features">
                <div className="panel-heading">
                  <h3 className="panel-title">Search Results</h3>
                </div>
                <div className="sidebar-table">
                          <table className="table table-hover" id="feature-list">
                            <thead className="hidden">
                              <tr>
                                <th>Colorbox</th>
                              </tr><tr>
                              </tr><tr>
                                <th>Name</th>
                              </tr><tr>
                              </tr><tr>
                                <th>Trash</th>
                              </tr><tr>
                              </tr></thead>
                            <tbody className="list">
                              { placeList }
                            </tbody>
                          </table>
                        </div>
              </div>
            </div>
	)
}

const mapStateToProps = function(state) {
      return {
            places: state.places
      };
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);