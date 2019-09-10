import React from "react";
import Moment from "moment";

import "./Eventmodal.css";
import API from "../../utils/API"

class EventModal extends React.Component{

    state = {
        deleted : "",
        btnDisabled : false
    }

    changeDate = () => {
    
        const startDate = new Date(Date.parse(this.props.event.startDate));
        const endDate =  new Date(Date.parse(this.props.event.endDate));
        const printEndDate = Moment(startDate).isSame(endDate, 'day');  

        

        console.log(printEndDate);
        const formatedDate = `${Moment(startDate).format("dddd, ll")} \n
                                From ${Moment(startDate).format("LT")} To ${printEndDate ?  "" : Moment(endDate).format("dddd ll")} ${Moment(endDate).format("LT")}`;
        console.log(formatedDate);
      
        return formatedDate;
    }

    deleteEvent = (id) => {
        API.deleteEvent(
            id
        ).then( (err) => {
            this.setState({deleted : "Event Deleted"});
            this.setState({btnDisabled : true});
                           
        }
        )
    }

    render (){
        console.log(this.props.event);
        const event = this.props.event;
        const dateTag =  this.changeDate();

      
        return(
            <div>
                <p>{this.state.deleted}</p>                
                <p className = "Heading">{event.eventName}</p>
                <div className = "dateTag">{dateTag.split("\n").map((i,key) => {
                    return <p key={key}>{i}</p>;
                })}</div>
                <p>{event.startTime}</p>
                <p> Alert {event.remindOpt_id}</p>
                <button
                    className = "btn btn-primary"
                    onClick = {() => {this.deleteEvent(event.id)}}
                    disabled = {this.state.btnDisabled}>Delete Event
                </button>
                <button 
                   className ="btn btn-light"  
                   onClick = {() => {this.props.close()}}>
                   Close
                </button>
            </div>
        );
    }
}

export default EventModal;