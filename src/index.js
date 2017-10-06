import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Redux components for instegration
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
// import static reducers
import reducers from './main/reducers';

// create a store
const store = createStore(reducers)

// usage store in top element of components
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
