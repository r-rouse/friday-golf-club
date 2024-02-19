const { Player, ScoreCard, Score, Hole, Course } = require('../models'); // adjust the path as necessary



const GetAllPlayer = async (req, res) => {
    try {
        const Players = await Player.findAll();
        res.send(Players);
    } catch (error) {
        throw error
    }
}
const getAllPlayersWithScorecards = async (req, res) => {
    try {
      const players = await Player.findAll({
        // Include Scorecards and any nested associations as needed
        include: [{
          model: ScoreCard,
          as: 'scorecards', // Ensure this matches the alias used in your association definition
          include: [{
            model: Course, // Optional: Include Course if Scorecard belongs to a Course
            as: 'course', // Again, ensure this matches the alias used in your association definition
          }, {
            model: Score, // Optional: Include Scores if detailed scores per hole are needed
            as: 'scores', // Alias used in association definition
            include: [{
              model: Hole, // Optional: Include Hole details for each Score
              as: 'hole', // Alias used in association definition
            }]
          }]
        }]
      });
      res.status(200).json(players);
    } catch (error) {
      console.error('Error fetching players with scorecards:', error);
      res.status(500).send({ message: error.message });
    }
  };
const GetPlayerById = async (req, res) => {
    try {
      let playerId = parseInt(req.params.id);
      const player = await players.findOne({
        where: { id: playerId }
      });
      res.send(player);
    } catch (error) {
      throw error;
    }
  };
const CreatePlayer = async (req, res) => {
    console.log(req)
    try {
      let newPlayer = await Player.create(req.body);
      res.send(newPlayer);
    } catch (error) {
      throw error;
    }
  };

  const UpdatePlayerDetails = async (req, res) => {
    try {
      let playerId = parseInt(req.params.id);
      let updatedPlayer = await Player.update(req.body, {
        where: { id: playerId },
        returning: true
      });
      res.send(updatedPlayer);
    } catch (error) {
      throw error;
    }
  };
  const DeletePlayer = async (req, res) => {
    try {
      let playerId = parseInt(req.params.id);
      await players.destroy({ where: { id: playerId} });
      res.send(`Deleted event with an id of ${playerId}`);
    } catch (error) {
      throw error;
    }
  };


module.exports = {
    GetAllPlayer,
    CreatePlayer,
    GetPlayerById,
    UpdatePlayerDetails,
    DeletePlayer,
    getAllPlayersWithScorecards

}