import "./style.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">

      <img src={ require('./logo-01.png')} width= "150" height = "45"/>
      {/* <img src={require('./logo4.png') {width="100" height="50"}} /> */}
      </Link>
      <div>
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link
              to="/calendar"
              className={window.location.pathname === "/Calendar" ? "nav-link active" : "nav-link"}
              className = "navText"
            >
              Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/todo"
              className={window.location.pathname === "/todo" ? "nav-link active" : "nav-link" }
              className = "navText"
            >
              ToDo
            </Link>

            
          </li>
          {/* <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Message
            </Link>

            
          </li> */}

          {/* <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
