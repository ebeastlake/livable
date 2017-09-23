import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

function Main(props) {
	return (
		<div>

		 <div className="container-fluid">
	        <div className="row">
	          <nav id="sideNav" className="col-lg-3">
	            <p>Side Nav</p>
	          </nav>
	          <div id="mainContent" className="col-lg-9">
	            <p>qmlsdkjmqlsdkjfmlq djfpoqds joqdj fmlqdj fmlqdj fmlqdj foqidjs fpoq djisfpoq idfjpo qdjsp ofijqsdpo fjqdpos fiqdpos fjqds
	              qdmlsfjqdpsofi jqdposfji qdosifjmqlds fjqoims fjmlq dkjsf
	              qsdjf omq fjiq dsfjfmlqdksjfoqdsfjpoafjpaoi fjqmds fjeoqidjs foiazje fdqisfoqi djfoqisdjfpo ajezfzjfp fjpoqjiz fe
	              qsdjfpom fjpoa fjepoazi fjepoaz jefpo jfqojifpoajiz efpoafjezaomlqp fjopdfjoqsj dfpofj qposd fjpaoz fjiapoz fjiaz
	              ef mjqsdfi jofi japzfji apoz fja fjpo a</p>
	            <div className="col-lg-6">
	              <p>Col 2</p>
	            </div>
	            <div className="col-lg-6">
	              <p>Col 3</p>
	            </div>
	            <div className="col-lg-6">
	              <p>Col 2</p>
	            </div>
	            <div className="col-lg-6">
	              <p>Col 3</p>
	            </div>
	          </div>
	        </div>
	      </div>

		<div>
	        <div id="container">
	          <div id="sidebar">
	            <div className="sidebar-wrapper">
	              <div className="panel panel-default" id="features">
	                <div className="panel-heading">
	                  <h3 className="panel-title">Points of Interest
	                    <button type="button" className="btn btn-xs btn-default pull-right" id="sidebar-hide-btn"><i className="fa fa-chevron-left" /></button></h3>
	                </div>
	                <div className="panel-body">
	                  <div className="row">
	                    <div className="col-xs-8 col-md-8">
	                      <input type="text" className="form-control search" placeholder="Filter" />
	                    </div>
	                    <div className="col-xs-4 col-md-4">
	                      <button type="button" className="btn btn-primary pull-right sort" data-sort="feature-name" id="sort-btn"><i className="fa fa-sort" />&nbsp;&nbsp;Sort</button>
	                    </div>
	                  </div>
	                </div>
	                <div className="sidebar-table">
	                  <table className="table table-hover" id="feature-list">
	                    <thead className="hidden">
	                      <tr>
	                        <th>Icon</th>
	                      </tr><tr>
	                      </tr><tr>
	                        <th>Name</th>
	                      </tr><tr>
	                      </tr><tr>
	                        <th>Chevron</th>
	                      </tr><tr>
	                      </tr></thead>
	                    <tbody className="list" />
	                  </table>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div id="map" />
	        </div>
	        <div id="loading">
	          <div className="loading-indicator">
	            <div className="progress progress-striped active">
	              <div className="progress-bar progress-bar-info progress-bar-full" />
	            </div>
	          </div>
	        </div>
	      </div>
	      </div>
	);
}	

export default Main;