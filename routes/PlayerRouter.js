const express = require('express');
const Router = express.Router(); // Use express.Router() directly
const controller = require('../controllers/Player');


Router.get('/test', (req, res) => {
    res.send('PlayerRouter is accessible');
  });
  
Router.get('/', controller.GetAllPlayer);
Router.get('/:id', controller.GetPlayerById);
Router.put('/:id', controller.UpdatePlayerDetails);
Router.delete('/:id', controller.DeletePlayer);
Router.post('/', controller.CreatePlayer);

module.exports = Router;
  