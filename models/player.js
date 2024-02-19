const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Make sure this path is correct

module.exports = (sequelize) => {

class Player extends Model {}

Player.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false // Assuming you want the name to be required
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // Assuming you want the email to be required
    unique: true, // Assuming each player should have a unique email
    validate: {
      isEmail: true, // Validates the email format
    }
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Player', // We need to choose the model name; Sequelize automatically looks for the plural form ('Players') for the table name unless you explicitly define it
  tableName: 'players', // Explicitly specify the table name if it doesn't match the pluralized model name
  timestamps: true, // Assuming you want Sequelize to automatically manage createdAt and updatedAt timestamps
});

return Player;


};