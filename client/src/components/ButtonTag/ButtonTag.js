import React from "react";

// import dateFns from "date-fns";
import "./buttonTag.css";
import EventType from "../../eventType.json";

class ButtonTags extends React.Component{

    getEventIcon = () =>{
       
        const id = this.props.event.eventType;
        const eventType = EventType.filter((event) => event.id === id);
        // console.log(eventType[0].icon);
        return eventType[0].icon;
    }
    
    render(){   
       
        const eventTypeIcon = this.getEventIcon();

        return (            
            <button className = " btn eventTag" 
               type = "button"
               id = {this.props.event.id}
               key = {this.props.event.key}
               onClick = {this.props.onClick}>
                {<i className={eventTypeIcon}></i>}
            </button>
        );
    }
}

export default ButtonTags;