const Player = require('../models/player')


const GetAllPlayer = async (req, res) => {
    try {
        const Players = await Player.findAll();
        res.send(Players);
    } catch (error) {
        throw error
    }
}
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
      let updatedPlayer = await players.update(req.body, {
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
    DeletePlayer

}