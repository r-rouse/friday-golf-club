// models/course.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Course extends Model {}

  Course.init({
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING
    },
    par: {
      type: DataTypes.INTEGER
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Course' // We need to choose the model name
  });

  return Course;
};


