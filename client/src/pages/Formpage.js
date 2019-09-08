import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBFormInline
} from "mdbreact";

import "./css/form.css";
import { Button } from "reactstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import API from "../utils/API";
import About from "./About";


class Formpage extends React.Component {

  state = {
    firstName : "",
    lastName : "",
    password : "",
    email : "",
    accountType : "",
    parentId : 0,
    phoneNo : "",
    password2:"", 
    radio : ""
  }

  handleInputChange = (ev) => {
    const value = ev.target.value;
       
    const name = ev.target.name;

    this.setState({[name] : value});
  }

  onRadioClick = (nr) =>{
    this.setState({
      radio: nr
    });
  }

  onButtonClick = () =>{
    const userData = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      password : this.state.password,
      email : this.state.email,
      accountType : this.state.accountType,
      parentId : this.state.parentId,
      phoneNo : this.state.phoneNo,
      
    }

    console.log(userData)

    API.saveUser(userData)
     .then((success) => {
       console.log("scuccess");
       window.open("/about", "_self")
     }) 
     .catch((err) =>{
       console.log("Failed");
     })
  }

  render (){
  return (

    
    <MDBContainer fluid className = "h-100 formContainer">
      <MDBRow  className = "formRow">
        <MDBCol md="5" className = "offset-6">
          <MDBCard>
            <MDBCardBody>
            <div className = "formChange">
             
                <p className="text-center py-2" style = {{fontSize :"20px"}}>Sign up</p>
                <div className="grey-text">
                  <form >
                    <MDBRow className = "row1"> 
                         <i className="fa fa-user icon1" ></i>                 
                        <input className = "form-control form-control-sm col-5"
                              validate                               
                              type="text" 
                              placeholder="First name"
                              name = "firstName"
                              required
                              error="wrong"
                              success="right"
                              value = {this.state.firstName}
                              onChange ={this.handleInputChange}/>

                        <input className = "form-control form-control-sm col-5 lastName" 
                              type="text"
                              name = "lastName" 
                              placeholder="Last name"
                              required
                              error="wrong"
                              success="right"
                              value = {this.state.password}                      
                              onChange = {this.handleInputChange}
                              />                       
                               
                  </MDBRow>
                  <MDBRow className="row1">
                    <i className="fa fa-phone icon1" ></i>                   
                    <input className = "form-control form-control-sm col-5" 
                                type="text"
                                name = "phoneNo" 
                                placeholder="Phone no"
                                required
                                error="wrong"
                                success="right"
                                value = {this.state.phoneNo}                      
                                onChange = {this.handleInputChange}
                                />                     
                  </MDBRow>                  

                  <MDBRow className = "rowRadio">
                    <MDBCol>
                      <MDBFormInline>
                        <MDBInput gap 
                                  onClick={() => this.onRadioClick(1)} 
                                  checked={this.state.radio ===1 ? true : false} 
                                  label="Parent" type="radio" id="radio1" />
                        <MDBInput gap 
                                  onClick={() => this.onRadioClick(2)} 
                                  checked={this.state.radio===2 ? true : false} 
                                  label="Child" type="radio" id="radio2" />
        
                      </MDBFormInline>
                    </MDBCol>
                  </MDBRow>
                 
                  <MDBRow className="row1">
                    <i className="fa fa-envelope icon1" ></i>                   
                    <input className = "form-control form-control-sm col-10" 
                                type="text"
                                name = "email" 
                                placeholder="Email"
                                required
                                error="wrong"
                                success="right"
                                value = {this.state.email}                      
                                onChange = {this.handleInputChange}
                                />                     
                  </MDBRow>  

                  <MDBRow className="row1">
                    <i className="fa fa-lock icon1" ></i>                   
                    <input className = "form-control form-control-sm col-5" 
                                type="password"
                                name = "password" 
                                placeholder="Password"
                                required
                                error="wrong"
                                success="right"
                                value = {this.state.password}                      
                                onChange = {this.handleInputChange}
                                />                     
                  </MDBRow>  

                  <MDBRow className="row1">
                    <i className="fa fa-exclamation-triangle icon1" ></i>                   
                    <input className = "form-control form-control-sm col-5" 
                                type="password2"
                                name = "" 
                                placeholder="Confirm your password"
                                required
                                error="wrong"
                                success="right"
                                value = {this.state.password2}                      
                                onChange = {this.handleInputChange}
                                />                     
                  </MDBRow>  
        
                  
                
                <div className="text-center py-4 mt-3">
                  <Button color="info"
                  onClick = {this.onButtonClick}>Register</Button>{" "}
                </div>
              </form>
              </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}

export default Formpage;
