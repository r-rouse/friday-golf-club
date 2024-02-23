const { Player, Course, ScoreCard, Score  } = require('../models');

const createScorecard = async (req, res) => {
  const { playerId, courseId, total_score } = req.body; // Expect scores to be an array of objects

  try {
    // Validate the playerId and courseId
    const player = await Player.findByPk(playerId);
    const course = await Course.findByPk(courseId);

    if (!player) {
      return res.status(404).send({ message: 'Player not found.' });
    }

    if (!course) {
      return res.status(404).send({ message: 'Course not found.' });
    }

    // Create the scorecard
    const scorecard = await ScoreCard.create({
      playerId,
      courseId,
      total_score,
      date_played: new Date(), // Example field, adjust according to your model
    });

    res.status(201).send({ message: 'Scorecard created successfully.', id: scorecard.id });
  } catch (error) {
    console.error('Failed to create scorecard:', error);
    res.status(500).send({ message: 'Error creating scorecard.' });
  }
};

const addStrokesToScorecard = async (req, res) => {
    const { scorecardId, holeStrokes } = req.body; // Assuming this data comes from the request body
    console.log(req.body);
    try {
      // Validate the scorecardId if necessary
  
      // Insert strokes for each hole
      const scorePromises = holeStrokes.map(({ holeId, strokes }) =>
        Score.create({
          scorecardId,
          holeId,
          strokes,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      );
  
      await Promise.all(scorePromises);
  
      res.status(201).send({ message: 'Strokes added successfully to scorecard.' });
    } catch (error) {
      console.error('Error adding strokes to scorecard:', error);
      res.status(500).send({ message: 'Error adding strokes to scorecard.' });
    }
  };

module.exports = {
  createScorecard,
  addStrokesToScorecard
};
