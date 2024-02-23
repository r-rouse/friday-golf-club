const express = require('express');
const Router = express.Router(); // Use express.Router() directly
const controller = require('../controllers/ScoreCard');


Router.get('/test', (req, res) => {
    res.send('scorecard router is accessible');
  });
  
Router.post('/newcard', controller.createScorecard);
Router.post('/addStrokes', controller.addStrokesToScorecard);

module.exports = Router;