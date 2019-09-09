import React from "react";
import {Link} from "react-router-dom";

// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCard,
//   MDBCardBody,
//   MDBView,
//   MDBMask,
//   MDBAnimation
// } from "mdbreact";


import "./css/about.css";

class About extends React.Component {

  render() {

    return (
        <div className = "container-fluid test">
          <div className ="Row rowHeading">
              <div className = "Col center"> 
                <p className ="text-light text-center heading1"> Login to </p>
                <p className = "text-light text-center heading2"> BetterDad</p>
                <Link to="/">
                    <button className= "btn btn-light btn-lg" style={{marginLeft:"45%"}}>Click to Login</button>
               </Link>
            </div>
          </div>

    

  

        </div>
      
    );
  }
}

export default About;