import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import subreducers
import places from './places';
import criteria from './criteria';
import loading from './loading';

const reducer = combineReducers({ places, criteria, loading });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;