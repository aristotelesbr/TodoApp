import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux components for instegration
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

// middlewares 
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
// import static reducers
import reducers from './main/reducers';

// Integration redux with dev tools browser
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// create a store and added middleware
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)


// usage store in top element of components
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
