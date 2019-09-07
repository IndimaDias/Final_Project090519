import React from "react";
import {Link} from "react-router-dom";

import "./css/about.css";

class About extends React.Component {

  render() {

    return (
        <div className = "container-fluid test">
          <div className ="Row rowHeading">
              <div className = "Col center"> 
                <h1 className ="text-light text-center"> Welcome to </h1>
                <h1 className = "text-light text-center">DAD'S ORGANIZER</h1>
                <Link to="/">
                    <button className= "btn btn-light btn-lg" style={{marginLeft:"45%"}}>Click to Login</button>
               </Link>
            </div>
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


        </div>
      
    );
  }
}

export default About;