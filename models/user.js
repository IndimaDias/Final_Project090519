'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {         
    firstName: {
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

    phoneNo : {
      type : DataTypes.STRING,
      allowNull :false} 
    
  });
  
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};