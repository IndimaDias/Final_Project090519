import React from "react";

import "./header.css";

function Header(props){
    
    return(
        <h1 className= "pageHeader">{props.heading}</h1>
    );
}

export default Header;