const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize) => {
    class Scorecard extends Model { }

    Scorecard.init({
        // Model attributes are defined here
        date_played: {
            type: DataTypes.DATE,
            allowNull: false, // Assuming you want the date to be required
        },
        total_score: {
            type: DataTypes.INTEGER,
            allowNull: false, // Assuming you want the total score to be required
        },
    }, {
        sequelize, // Pass the connection instance
        modelName: 'Scorecard', // Specify the model name
        tableName: 'scorecards' // Explicitly set the table name if it doesn't follow Sequelize's naming convention
    });


    return Scorecard;

}