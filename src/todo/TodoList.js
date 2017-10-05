import React, {Component} from 'react';
import IconButton from '../template/IconButton';

export default class TodoList extends Component {
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
						<td>Descrição</td>
					</tr>
				</thead>
				<tbody>
					{renderRows()}
				</tbody>
			</table>
		)
	}
}