import React from "react";

import API from "../../utils/API";

class TodoForm extends React.Component{

    state = {
        task : ""
    }    

	onSubmit=(e) => {
		e.preventDefault();
       
        var task = this.state.task.trim();
        const userId = window.localStorage.getItem("userId");	

		if (!task) {
			return;
		}
        
        let todoItem = {
            taskName : task,
            userId : userId,
            status : "I"
        }

        API.saveToDo(todoItem)
         .then((err)=>{
             console.log(err);
             this.props.onTaskSubmit();
         })
         
      
        this.setState({task : ""});
		return;
    }
    
    onChange = (e) =>{    
        const value = e.target.value;       
        const name = e.target.name;
                
        this.setState({[name] : value});
    }

	render() {
		return (
			<div className="commentForm vert-offset-top-2">
				<hr />
				<div className="clearfix">
					<form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
						<div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label"><strong>Task</strong></label>
							<div className="col-md-10">
                                <input type="text" 
                                       id="task" 
                                       name="task" 
                                       className="form-control" 
                                       placeholder="What do you need to do?" 
                                       value = {this.state.task}
                                       onChange = {this.onChange}/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-10 col-md-offset-2 text-right">
                                <input type="button" value="Save Task" className="btn btn-primary"
                                       onClick = {this.onSubmit} />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default TodoForm; 