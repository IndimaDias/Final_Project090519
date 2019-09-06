import React from "react";
import "./Modal.css"


const Modal = (props) => {
   
  return (
      <div>
          <div className="modal-wrapper"
              style={{
                  transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                //   height : props.show ? '100%' : "0",                 
                  opacity: props.show ? '1' : '0'
              }}>
              <div className="modal-header">
                  <h5>{props.type === "C" ? "Create Event" : "Event Detail"}</h5>
                  <span className="close-modal-btn" onClick={props.close}>×</span>
              </div>
              <div className="modal-body">
                  {props.children}
                  
              </div>
           
          </div>
      </div>
  )
}


export default Modal;