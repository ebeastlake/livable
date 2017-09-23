import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Criteria from './Criteria.jsx';

function CriteriaList(props) {

	let list = props.criteria.map((criterion, idx) => {
		return <Criteria key={idx} criterion={criterion}/>
	});

	return (
		<div> {list} </div>
	);
}	

const mapStateToProps = function(state) {
	return {
		criteria: state.criteria
	};
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CriteriaList);