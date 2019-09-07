import React from "react";
import TodoItem from "./TodoItem";
import "./todo.css"


class TodoList extends React.Component{

	removeNode =  (nodeId) => {
		this.props.removeNode(nodeId);
		return;
    }
    
	toggleComplete = (nodeId) => {
		this.props.toggleComplete(nodeId);
		return;
	}
	
	setEvent = (nodeId) => {
		console.log(nodeId);
		this.props.setEvent(nodeId);
		return;
	}
    
	render() {
		var listNodes = this.props.data.map(function (listItem) {
			return (
				<TodoItem 
					key={listItem.id} 
					nodeId={listItem.id} 
					task={listItem.taskName} 
					status={listItem.status} 
					removeNode={this.removeNode} 
					toggleComplete={this.toggleComplete}
					setEvent = {this.setEvent} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
}

export default TodoList;
