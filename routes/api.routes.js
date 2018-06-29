// requiring user controller
const UserController = require('../controllers/user.server.controller');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
// requiring express router
const express = require('express');
const Router = express.Router();

// NUMBER GAME API ROUTES

// Matches with "/api/
Router.route('/numbergame')
  .get(NumberGameController.getNumberGame)


Router.route('/user/:id')
  .get(UserController.findUserById)
// OR something like this
  .put(UserController.updateUser)
// Lets clear this up before we transfer

Router.route('/user')
  .get(UserController.findAll)
// testing routes

// // Route to Card Game 
// Router.route('/cardgame')
//   .get(CardGameController)
// Router.route('/games/cardgame/time').post(CardGameController.setTime)

// // Parents Page requests
// Router.route('/games/cardgame/time').get(CardGameController.getTime)

// // User Routes
// Router.route('/api/users').get(UserController.findUsers)
// Router.route('/api/users').post(UserController.addUser)


// CARD GAME API ROUTES
module.exports = Router;
