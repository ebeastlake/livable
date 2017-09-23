import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import subreducers
import places from './places';
import criteria from './criteria';

const reducer = combineReducers({ places, criteria });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;