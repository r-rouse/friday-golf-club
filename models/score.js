// models/score.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration file
const Scorecard = require('./scorecard');
const Hole = require('./hole');

const Score = sequelize.define('Score', {
    strokes: {
        type: DataTypes.INTEGER
    }
});

Score.belongsTo(Scorecard);
Score.belongsTo(Hole);

module.exports = Score;
