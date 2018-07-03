// requiring user controller
const UserController = require('../controllers/userController');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
const ColorGameController = require('../controllers/colorgame.server.controller')
// requiring express router
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const numberGameController = require("../controllers/numbergame.server.controller");


// testing routes
router.get('/api', UserController.login)

// number game route
router.get('/api/numbergame', NumberGameController.getNumberGame)
router.get('/api/colorgame', ColorGameController.getColorGame)
router.get('/api/cardgame', CardGameController.getCardGame)

// User Routes
router.post('/api/users', UserController.addUser)
router.get('/api/users', UserController.findUsers)
router.get('/api/users/:id', UserController.findOneUser)

module.exports = router