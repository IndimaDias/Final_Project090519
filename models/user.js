'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {         
    FirstName: {
        type : DataTypes.STRING,
        allowNull : false
    
    },
    lastName: {
        type : DataTypes.STRING,
        allowNull : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    accountType : {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    parentId : {
        type : DataTypes.INTEGER
    },
    phoneNo : DataTypes.STRING 
    
  });
  
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};