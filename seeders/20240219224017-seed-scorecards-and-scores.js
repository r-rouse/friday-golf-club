'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Example: Inserting a scorecard for player with ID=1
    const [scorecard, metadata] = await queryInterface.sequelize.query(
      `INSERT INTO "scorecards" ("playerId", "courseId", "createdAt", "updatedAt")
      VALUES (1, 8, NOW(), NOW()) RETURNING id;`
    );

    // Assuming you know the hole IDs and the strokes made by the player
    const holeStrokes = [
      { holeId: 7, strokes: 4 },
      { holeId: 8, strokes: 5 },
      // Add more holes as needed
    ];

    for (const { holeId, strokes } of holeStrokes) {
      await queryInterface.sequelize.query(
        `INSERT INTO "scores" ("scorecardId", "holeId", "strokes", "createdAt", "updatedAt")
        VALUES (${scorecard[0].id}, ${holeId}, ${strokes}, NOW(), NOW());`
      );
    }
  },

  async down (queryInterface, Sequelize) {
    // Add logic to revert the seed, if necessary
    await queryInterface.bulkDelete('scores', null, {});
    await queryInterface.bulkDelete('scorecards', null, {});
  }
};

