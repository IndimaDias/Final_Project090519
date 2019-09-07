import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody
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
    phoneNo : ""
  }

  handleInputChange = (ev) => {
    const value = ev.target.value;
       
    const name = ev.target.name;

    this.setState({[name] : value});
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
      <MDBRow end>
        <MDBCol sm="5">
          <MDBCard>
            <MDBCardBody>
            <div className = "formChange">
              <form>
                <p className="text-center py-2" style = {{fontSize :"20px"}}>Sign up</p>
                <div className="grey-text">
                  <MDBRow className = "row1">
                    <MDBInput size="sm"
                      label="First name"          
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name = "firstName"
                      value = {this.state.firstName}
                      onChange ={this.handleInputChange}
                    />

                    <MDBInput className = "lastName" size = "sm"
                      label="Last name"
                      icon="1"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name = "lastName"
                      value = {this.state.lastName}
                      onChange = {this.handleInputChange}
                    />
                  </MDBRow>

                  <MDBInput size = "sm"
                    label="Phone Number"
                    icon="phone"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                    name = "phoneNo"
                    value = {this.state.phoneNo}
                    onChange = {this.handleInputChange}
                  />

                  <fieldset>
                    <Form.Group as={Row} className="rowRadio">
                      {/* <Col sm={10}> */}
                        <Form.Check                        
                          type="radio"
                          label="Parent"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check                          
                          type="radio"
                          label="Child"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      {/* </Col> */}
                    </Form.Group>
                  </fieldset>
                  
                  <MDBInput size = "sm"
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name = "email"
                    value = {this.state.email}
                    onChange = {this.handleInputChange}
                  />
                  <MDBInput size = "sm"
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name = "password"
                    value = {this.state.password}
                    onChange = {this.handleInputChange}
                  />
                  <MDBInput size = "sm"
                    label="Confirm your password"
                    icon="exclamation-triangle"
                    group
                    type="password"
                    validate
                    error="wrong"
                    success="right"
                    onChange = {this.handleInputChange}
                  />
                  
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="info"
                  onClick = {this.onButtonClick}>Register</Button>{" "}
                </div>
              </form>

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
