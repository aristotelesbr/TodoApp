import React, { Component } from 'react';
import Menu from '../template/Menu';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../template/custom.css';

class App extends Component {
	render(){
		return(
			<div className='container'>
				<div>
					<Menu />
					<Routes />
				</div>
			</div>
		)
	}
}

export default App;