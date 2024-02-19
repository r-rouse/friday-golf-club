const Sequelize = require('sequelize');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env]; // Adjust the path as needed

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: config.logging,
  dialectOptions: config.dialectOptions,
});

// Import models
const courseModel = require('../models/course');
const holeModel = require('../models/hole');
const playerModel = require('../models/player')
const scoreCardModel = require('../models/scorecard')
const scoreModel = require('../models/score')

// Initialize models
const Course = courseModel(sequelize, Sequelize.DataTypes);
const Hole = holeModel(sequelize, Sequelize.DataTypes);
const Player = playerModel(sequelize, Sequelize.DataTypes);
const ScoreCard = scoreCardModel(sequelize, Sequelize.DataTypes);
const Score = scoreModel(sequelize, Sequelize.DataTypes);

// Define associations
Course.hasMany(Hole, { foreignKey: 'courseId', as: 'holes' });
Hole.belongsTo(Course, { foreignKey: 'courseId', as: 'courses' });
Player.hasMany(ScoreCard, { foreignKey: 'playerId', as: 'scorecards' });
ScoreCard.belongsTo(Player, { foreignKey: 'playerId', as: 'player' });

ScoreCard.hasMany(Score, { foreignKey: 'scorecardId', as: 'scores' });
Score.belongsTo(ScoreCard, { foreignKey: 'scorecardId', as: 'scorecard' });

// If Score is linked to specific Hole and Course
Hole.hasMany(Score, { foreignKey: 'holeId', as: 'scores' });
Score.belongsTo(Hole, { foreignKey: 'holeId', as: 'hole' });

Course.hasMany(ScoreCard, { foreignKey: 'courseId', as: 'scorecards' });
ScoreCard.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });

// Export everything needed
module.exports = {
  sequelize,
  Sequelize,
  Course,
  Hole,
  Player,
  Score,
  ScoreCard,
};

