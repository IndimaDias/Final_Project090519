import React from "react";
import {Link} from 'react-router-dom'
import Row from "../components/Row";
import Col from "../components/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/home.css";


class Home extends React.Component{

  state = {
    Email:"",
    password : ""
  }
 
  login = () =>{
    console.log(this.state.Email);
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
           <h1>DAD'S ORGANIZER</h1>
          </div>

          <div className="register-info-box">
            <h2>Don't have an account?</h2>
            <p>Daady , Mommy, kids ?? all can register</p>
            {/* <label id="label-login" for="log-login-show">Register</label> */}
            <Link to="/formpage">
              <button className= "btn btn-outline-secondary" style={{padding:"5px 20px"}}>Register </button>
            </Link>
            
            
          </div>

          <div className="white-panel">
            <div className="login-show">
              <h2>LOGIN</h2>
              <form>
                <input className = "form-control" 
                       type="text" 
                       placeholder="Email"
                       name = "Email"
                       value = {this.state.Email}
                       onChange = {this.handleInputChange}/>

                <input className = "form-control" 
                       type="password"
                       name = "password" 
                       placeholder="Password"
                       value = {this.state.password}                      
                       onChange = {this.handleInputChange}/>

                <input type="button" 
                       value="Login"
                       onClick = {this.login}
                />
                {/* <button type="submit" className = "btn btn-dark">Login</button> */}
                <a href="">Forgot password?</a>
              </form>
            </div>

          </div>
      </div>
    </div>

  );

  }
}

export default Home;

