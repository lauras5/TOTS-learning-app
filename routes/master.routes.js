// requiring user controller
const UserController = require('../controllers/userController');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')

// number game route
router.route("/numbergame").get(NumberGameController.getNumberGame)

// cardgame
router.post('/api/games/cardgame', CardGameController.addScore)

// User Routes
router.get('/register', UserController.getUser)
router.post('/register', UserController.addUser)

// user Authentication
router.post('/login', UserController.login)
router.get('/login', UserController.authenticate)





// router.get('/logout', function(req, res) {
//     console.log('you are logged out')
//     req.logout();
//     res.redirect('/');
// });

// router.post('/api/users', function(req, res) {})

module.exports = router