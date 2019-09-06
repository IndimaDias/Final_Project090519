import React from "react";
import remindOptions from "../remindOption";

export default {
    getValue : function(id){

        var timeVal = 0;

        const remindOpt = remindOptions.fileter(option => option.id === id);

        timeVal = remindOpt.timeValue;
        
        if(id <= 4){
            return timeVal ;
        }
        else{
            return timeVal * 60;
        }
    }
}