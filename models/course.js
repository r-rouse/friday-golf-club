// models/course.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration file

const Course = sequelize.define('Course', {
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
});

module.exports = Course;
