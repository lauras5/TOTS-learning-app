const CardGameController = require('../controllers/cardgame.server.controller.js');
const Router = require('express').Router();

// Route to main game page (HTML Request)
Router.route('/games/cardgame').get(CardGameController)
Router.route('/games/cardgame/time').post(CardGameController.setTime)

module.exports = Router;