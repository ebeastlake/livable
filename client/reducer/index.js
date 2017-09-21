import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import subreducers
import places from './places';

const reducer = combineReducers({ places });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;