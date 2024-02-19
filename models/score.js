const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize) => {
class Score extends Model {}

Score.init({
  // Model attributes are defined here
  strokes: {
    type: DataTypes.INTEGER,
    allowNull: false, // Consider adding constraints like allowNull based on your requirements
  },
}, {
  sequelize, // Pass the connection instance
  modelName: 'Score', // Specify the model name
  tableName: 'scores' // Explicitly set the table name if it doesn't follow Sequelize's naming convention
});

return Score;

}