import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Todo from '../todo/Todo';
import About from '../about/About';

class Routes extends Component {
	render() {
		return(
			<Switch>
				<Route exact path='/' component={Todo} />
				<Route path='/about' component={About} />
				<Redirect to='/' component={Todo} />
			</Switch>
		)
	}
}

export default Routes;