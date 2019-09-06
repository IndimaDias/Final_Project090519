import React from "react";
import remindOptions from "../remindOption";

export default {
    getValue : function(id){
       
        var timeVal = 0;

        const remindOpt = remindOptions.filter(optionObj => optionObj.id == id);


        timeVal = remindOpt[0].timeValue;
      
        
        if(id <= 4){
            return timeVal ;
        }
        else{
            return timeVal * 60;
        }
    }
}