import React, { Component } from 'react';
import { connect } from 'react-redux';
// 1
import { bindActionCreators } from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
// 2
import { changeDescription, search } from './TodoActions';

class TodoForm extends Component {
	constructor(props) {
		super(props)
		this.keyHandler = this.keyHandler.bind(this)
	}

	componentWillMount() {
		this.props.search()
	}

	keyHandler(e) {
		if (e.key === 'Enter') {
			e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
		} else if (e.key === 'Escape'){
			this.props.handleClear();
		}
	}

	render() {
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
					<IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
					<IconButton style='info' icon='search' onClick={this.props.handleSearch} />
					<IconButton style='dafault' icon='close' onClick={this.props.handleClear} />
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state => ({ description: state.todo.description })
// 3
const mapDispatchProps = dispatch => 
	bindActionCreators({changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchProps)(TodoForm)
