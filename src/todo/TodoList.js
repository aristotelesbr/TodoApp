import React, {Component} from 'react';
// import Redux setings
import { connect } from 'react-redux'
import IconButton from '../template/IconButton';

class TodoList extends Component {
	render() {

		const renderRows = () => {
			const list = this.props.list || []
			return list.map(todo => (
				<tr key={todo._id}>
					<td className={todo.done ? 'cssMarkAsDone' : ''}>{todo.description}</td>
					<td>
						<IconButton style='success' icon='check' hide={todo.done} 
							onClick={() => this.props.handleMarkAsDone(todo)} />
						<IconButton style='warning' icon='undo' hide={!todo.done}
							onClick={() => this.props.handleMarkAsPending(todo)} />
						<IconButton style='danger' icon='trash-o' hide={!todo.done}
							onClick={() => this.props.handleRemove(todo)} />
					</td>
				</tr>
			))
		}

		return(
			<table className='table'>
				<thead>
					<tr>
						<th>Descrição</th>
						<th className='tableAction'>Ações</th>
					</tr>
				</thead>
				<tbody>
					{renderRows()}
				</tbody>
			</table>
		)
	}
}
// mapping state
const mapStateToProps = state => ({list: state.todo.list})
// conneting this component with static list of reducers
export default connect(mapStateToProps)(TodoList)