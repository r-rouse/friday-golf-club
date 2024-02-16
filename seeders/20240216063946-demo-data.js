'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define seeding data
      const playersData = [
        { name: 'John Doe', email: 'john@example.com', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date(), updatedAt: new Date() },
        // Add more players as needed
      ];
      
      // Add more players as needed

    // Insert seeding data into the 'Players' table
    await queryInterface.bulkInsert('players', playersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove seeded data
    await queryInterface.bulkDelete('players', null, {});
  }
};

