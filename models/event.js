// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    eventName: {
        type: DataTypes.STRING,
        allowNull : false
        },     
    startDate: {
        type : DataTypes.DATE,
        allowNull : false
    
    },
    endDate : {
        type : DataTypes.DATE,
        allowNull : false
    },
    repeatOpt_Id : {
        type : DataTypes.STRING,
        // allowNull : false
    },
    remindOpt_id : {
        type : DataTypes.STRING,
        // allowNull : false
    },
    location : {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    notes : {
        type : DataTypes.TEXT
    } ,
    eventType : {
        type : DataTypes.STRING
        // allowNull : false
    },
    userId : {
        type : DataTypes.INTEGER
        // allowNull : false
    },
    todoId : {
        type : DataTypes.INTEGER
    }
  });
  
  Events.associate = function(models) {
    // associations can be defined here
  };
  return Events;
};