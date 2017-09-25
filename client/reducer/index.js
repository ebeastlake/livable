import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import subreducers
import places from './places';
import criteria from './criteria';
import loading from './loading';
import location from './location';

const reducer = combineReducers({ places, criteria, loading, location });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;