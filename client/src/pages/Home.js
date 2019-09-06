import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./css/home.css";


class Home extends React.Component{
 
  render(){
  return (

    <div className = "container-fluid">

      
      <div className="login-reg-panel">
          <div className="login-info-box">
           <h1>MONDAY</h1>
          </div>

          <div className="register-info-box">
            <h2>Don't have an account?</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <label id="label-login" for="log-login-show">Register</label>
            <input type="radio" name="active-log-panel" id="log-login-show"/>
          </div>

          <div className="white-panel">
            <div className="login-show">
              <h2>LOGIN</h2>
              <input type="text" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <input type="button" value="Login"/>
              <a href="">Forgot password?</a>
            </div>
{/* 
            <div className="register-show">
              <h2>REGISTER</h2>
              <input type="text" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <input type="password" placeholder="Confirm Password"/>
              <input type="button" value="Register"/>
            </div> */}
          </div>
      </div>
    </div>

  );

  }
}

export default Home;

