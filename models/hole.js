const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Hole extends Model {
    // Define class methods if needed
  }

  Hole.init({
    // Model attributes are defined here
    hole_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    par: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseId: { // Foreign key to Course model
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses', // This should match the table name for Course
        key: 'id',
      },
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Hole', // We need to choose the model name
    tableName: 'holes' // Optional: Specify the table name explicitly
  });

  return Hole;
};


