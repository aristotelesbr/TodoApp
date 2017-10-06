import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

class TodoForm extends Component {
	render() {
		const keyHandler = (e) => {
			if (e.key === 'Enter') {
				e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
			} else if (e.key === 'Escape'){
				this.props.handleClear();
			}
		}

		return(
			<div role='form' className='todoForm'>
				<Grid cols='12 9 10'>
					<input 
						id='description' 
						className='form-control' 
						placeholder='Adicione uma tarefa'
						onKeyUp={keyHandler}
						onChange={this.props.handleChange}
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
export default connect(mapStateToProps)(TodoForm)
