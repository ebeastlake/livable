import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer';
import Main from './Components/Main.jsx';

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('app')
);