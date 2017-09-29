import React from 'react'
import { Switch } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

class Routes extends Component => (
	<Switch>
		<div>
			<Route path='/todos' component={Todo} />
			<Route path='/about' component={About} />
			<Redirect from='*' to='/todos' />
		</div>	
	</Switch>
)

export default Routes;