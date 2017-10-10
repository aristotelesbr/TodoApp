import React, { Component } from 'react';
import { connect } from 'react-redux';
// 1
import { bindActionCreators } from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
// 2
import { add, changeDescription, search, clear } from './TodoActions';

class TodoForm extends Component {
	constructor(props) {
		super(props)
		this.keyHandler = this.keyHandler.bind(this)
	}

	componentWillMount() {
		this.props.search()
	}

	keyHandler(e) {
		// destructuring
		const { add, search, description, clear } = this.props
		if (e.key === 'Enter') {
			e.shiftKey ? search(description) : add(description)
		} else if (e.key === 'Escape'){
			clear();
		}
	}

	render() {
		const { add, search, description, clear } = this.props
		return(
			<div role='form' className='todoForm'>
				<Grid cols='12 9 10'>
					<input 
						id='description' 
						className='form-control' 
						placeholder='Adicione uma tarefa'
						onKeyUp={this.keyHandler}
						onChange={this.props.changeDescription}
						value={this.props.description}>
					</input>
				</Grid>
				<Grid cols='12 3 2'>
					<IconButton style='primary' icon='plus' onClick={() => add(description)} />
					<IconButton style='info' icon='search' onClick={search} />
					<IconButton style='dafault' icon='close' onClick={() => clear()} />
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state => ({ description: state.todo.description })
// 3
const mapDispatchProps = dispatch => 
	bindActionCreators({add, changeDescription, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchProps)(TodoForm)
