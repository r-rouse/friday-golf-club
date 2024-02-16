// models/scorecard.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration file
const Player = require('./player');
const Course = require('./course');

const Scorecard = sequelize.define('Scorecard', {
    date_played: {
        type: DataTypes.DATE
    },
    total_score: {
        type: DataTypes.INTEGER
    }
});

Scorecard.belongsTo(Player);
Scorecard.belongsTo(Course);

module.exports = Scorecard;
