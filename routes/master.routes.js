// requiring user controller
const UserController = require('../controllers/userController');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
// requiring express router
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const numberGameController = require("../controllers/numbergame.server.controller");


// testing routes
router.get('/api', UserController.login)

// number game route
router.get('/api/numbergame', numberGameController.getNumberGame)

// User Routes
router.post('/api/users', UserController.addUser)
router.get('/api/users', UserController.findUsers)


module.exports = router