'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert course data without expecting return value
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Augusta National Golf Club',
        location: 'Augusta, Georgia, USA',
        par: 72,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more courses if needed
    ], {});

    // Assuming 'name' is unique, query to get the course ID
    const courses = await queryInterface.sequelize.query(
      `SELECT id FROM "Courses" WHERE name='Augusta National Golf Club';`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const courseId = courses[0].id;

    // Insert hole data with the course ID
    await queryInterface.bulkInsert('holes', [
      { hole_number: 1, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 2, par: 5, courseId: courseId, createdAt: new Date(), updatedAt: new Date() }
      // Add more holes as necessary
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove inserted data in reverse order
    await queryInterface.bulkDelete('holes', null, {});
    await queryInterface.bulkDelete('Courses', null, {});
  }
};

