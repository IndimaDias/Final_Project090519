import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import CreateEvent from "../createEvent/createEvent";
import Modal from "../Modal/Modal";


import API from "../../utils/API";

import "./todo.css";

class TodoBox extends React.Component{

  state = {
	data: [],
	show : false,
	taskName : "",
	taskId : ""
  }


	getTodos = (userId) =>{
		
		API.getTodos(userId)
			.then(res => {
				
				this.setState({data: res.data});
				
			})
			.catch(() =>{
				this.setState({data : [] })
			})  
	}


	updateTodo = (id) => {
		API.updateTodo(id)
		.then(res =>{
			console.log(res.rowsUpdated);
		})
		.catch((err)=>{
			console.log(err);
		})
	}


	deleteTood = (id) =>{
		console.log(id);
		API.deleteTodo(id)
		.then(res =>{
			console.log(res.data);
		})
		.catch((err)=>{
			console.log(err);
		})
	}


    componentDidMount (){

	  this.getTodos(1);
  }
  



	handleNodeRemoval = (nodeId) => {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== nodeId;
		});

		this.deleteTood(nodeId);
		this.setState({data});
		return;
  }
  


	handleSubmit = (task) => {
		
		this.getTodos(1);
  }
  


	handleToggleComplete = (nodeId) => {
		
		var data = this.state.data;
		console.log(data);
		for (var i in data) {
			if (data[i].id === nodeId) {
				data[i].status = data[i].status === 'C' ? 'I' : 'C';
				this.updateTodo(nodeId);
				break;
			}
		}
		this.setState({data});
		return;
  }
  

  createEvent = (nodeId) =>{
	var data = this.state.data;
	data = data.filter(function (el) {
		return el.id === nodeId;
	});

	this.setState({
		show: true,		
		taskId : nodeId,
		taskName : data[0].taskName
	});
    return;
  }

  renderModal(){
  
    return (
      <div className="newevent">      
        <Modal
            className="modal"
            show={this.state.show}
            close={this.closeModalHandler}
		>
            <CreateEvent                  
				close = {this.closeModalHandler}   
				taskName = {this.state.taskName}
				taskId = {this.state.taskId}               
            />               
        </Modal>
      </div>
    );
  }

  closeModalHandler = () => {
    this.setState({
        show: false
    });
  }



	render() {
		return (
			<div>
				{ this.state.show ? this.renderModal():""}
			
				<div className="well">				
					<TodoList data={this.state.data} 
							removeNode={this.handleNodeRemoval} 
							toggleComplete={this.handleToggleComplete} 
							setEvent = {this.createEvent}/>
					<TodoForm onTaskSubmit={this.handleSubmit} />
				</div>
			</div>
		);
	}
}



export default TodoBox;