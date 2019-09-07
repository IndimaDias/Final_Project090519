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

const Formpage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="6" height="300px">
          <MDBCard>
            <MDBCardBody >
            <div class = "formChange">
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="First name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    label="Last name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    label="Phone Number"
                    icon="phone"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <fieldset>
                    <Form.Group as={Col}>
                      <Col sm={10}>
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
                      </Col>
                    </Form.Group>
                  </fieldset>
                  
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="info">Register</Button>{" "}
                </div>
              </form>

              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Formpage;
