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
          

        </div>
      
    );
  }
}

export default About;