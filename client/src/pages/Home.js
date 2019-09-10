import React from "react";
import {Link} from 'react-router-dom'
import Row from "../components/Row";
import Col from "../components/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/home.css";
import API from "../utils/API";

class Home extends React.Component{

  state = {
    Email:"",
    password : "",
    errorMessage : ""
  }
 
  login = (ev) =>{
    ev.preventDefault();
    console.log(this.state.Email);
    console.log(this.state.password);
    const email = this.state.Email;
    const password = this.state.password;

    API.validateUser(email,password)
    .then(res =>{
      if(!res.data){
        this.setState({errorMessage: "Invalid email or password"});
      }
      window.localStorage.setItem('userId', res.data.id);
      window.open("/Calendar", "_self")
       console.log(res.data); 
       console.log("valid user");
    })
    .catch((err)=>{
      this.setState({errorMessage : "Something went wrong"});
    })
  }
  
  handleInputChange = (ev) => {
    const value = ev.target.value;
       
    const name = ev.target.name;

    this.setState({[name] : value});
  }


  render(){
  return (

    <div className = "container-fluid">

      
      <div className="login-reg-panel">
          <div className="login-info-box">

           <h1>BetterDad</h1>

          </div>

          <div className="register-info-box">
            {/* <h2>Don't have an account?</h2> */}

            <p style= {{textAlign : "left"}}><span style={{fontSize:"30px"}}>BetterDad</span> is an app designed to help busy families schedule events,activities,playdates and more. 
                  All while allowing you to assign the tasks
                    to members in the family as well as set up reminders for the event.  </p>

          
            <Link to="/formpage">
              <button className= "btn btn-outline-secondary" style={{padding:"5px 20px"}}>Register </button>
            </Link>
            
            
          </div>

          <div className="white-panel">
            <div className="login-show">
              <h2>LOGIN</h2>
              <form className="needs-validation">
                <input className = "form-control" 
                       type="text" 
                       placeholder="Email"
                       name = "Email"
                       value = {this.state.Email}
                       onChange = {this.handleInputChange}
                       required
                       error="wrong"
                       success="right"/>

                <input className = "form-control" 
                       type="password"
                       name = "password" 
                       placeholder="Password"
                       value = {this.state.password}                      
                       onChange = {this.handleInputChange}
                       required/>
                
                <div className = "row">
                    <div className ="col align-self-start">
                        <a href="">Forgot password?</a>
                    </div> 
                    <div className = "col align-self-end">  
                        <input className = "btn btn-dark btnLogin end"
                              type="submit" 
                              value="Login"
                              onClick = {this.login}
                        />  
                    </div>

                  </div>
              
                  {/* <button type="submit" className = "btn btn-dark">Login</button> */}
                 


              </form>
              <div> {this.state.errorMessage}</div>
            </div>

          </div>
      </div>
    </div>

  );

  }
}

export default Home;

