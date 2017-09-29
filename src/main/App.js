import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import React, { Component } from 'react';
import Menu from '../template/Menu';

class App extends Component {
	render(){
		return(
			<div className='container'>
				<Menu />
			</div>
		)
	}
}

export default App;