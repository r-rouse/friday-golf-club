// models/player.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration file

const Player = sequelize.define('players', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
});

module.exports = Player;

