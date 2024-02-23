'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert course data without expecting return value
    await queryInterface.bulkInsert("Courses", [
      {
        name: 'Big Rec 18',
        location: 'LongBeach, California USA',
        par: 72,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more courses if needed
    ], {});

    // Assuming 'name' is unique, query to get the course ID
    const courses = await queryInterface.sequelize.query(
      `SELECT id FROM "Courses" WHERE name='Big Rec 18';`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const courseId = courses[0].id;

    // Insert hole data with the course ID
    await queryInterface.bulkInsert('holes', [
      { hole_number: 1, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 2, par: 5, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 3, par: 5, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 4, par: 5, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 5, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 6, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 7, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 8, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 9, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 10, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 11, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 12, par: 3, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 13, par: 3, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 14, par: 3, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 15, par: 3, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 16, par: 3, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 17, par: 3, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      { hole_number: 18, par: 4, courseId: courseId, createdAt: new Date(), updatedAt: new Date() },
      
      // Add more holes as necessary
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove inserted data in reverse order
    await queryInterface.bulkDelete('holes', null, {});
    await queryInterface.bulkDelete('Courses', null, {});
  }
};

