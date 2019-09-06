import React from "react";
import TodoBox from "../components/Todo/TodoBox";

import "./style.css"

class Todo extends React.Component{

  render(){
    return(
      <div className = "container-fluid bg">
        <div className = "row">
            <div className = "colLabel col-6">
                  <p className = "label">More To Do? </p>
            </div>
        </div>
        <div className = "row">
          <div className = "colTodo col-5 offset-5 " >
            <TodoBox/>
          </div>
        </div>

        
      </div>
    )
  }
}

export default Todo;