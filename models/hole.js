// models/hole.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration file
const Course = require('./course');

const Hole = sequelize.define('Hole', {
    hole_number: {
        type: DataTypes.INTEGER
    },
    par: {
        type: DataTypes.INTEGER
    }
});

Hole.belongsTo(Course);

module.exports = Hole;
