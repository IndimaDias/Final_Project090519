'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todos = sequelize.define('Todos', {
    taskName: {
        type: DataTypes.STRING,
        allowNull : false
        },         
    userId : {
        type : DataTypes.INTEGER,
        // allowNull : false
    },
    status : {
        type : DataTypes.STRING
    }
  });
  
  Todos.associate = function(models) {
    // associations can be defined here
  };
  return Todos;
};