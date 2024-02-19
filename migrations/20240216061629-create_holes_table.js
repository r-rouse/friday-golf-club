// In the migration file for creating the holes table
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('holes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hole_number: {
        type: Sequelize.INTEGER,
      },
      par: {
        type: Sequelize.INTEGER,
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'courses', // Update to match the table name in the database (capitalized)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('holes');
  },
};
