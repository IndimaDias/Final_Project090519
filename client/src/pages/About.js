// import React from "react";
// import Container from "../components/Container";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from "react-bootstrap/Jumbotron";


// import "./style.css";

// const home = () => {
//   return <div className="bg" />;
// };
// export default home;


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./css/index.css";

class About extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <Router>
          <div>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Login to BetterDad
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    BetterDad is an app designed to help busy families schedule events,
                    activities,playdates and more. All while allowing you to assign the tasks
                    to members in the family as well as set up reminders for the event. 
                  </h6>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Log In
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="text-default"
                          iconClass="text-default"
                          label="Your email"
                          icon="envelope"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                        />
                        <div className="text-center mt-4">
                        <MDBBtn rounded color="info">Login</MDBBtn>
            </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default About;