// requiring user controller
const UserController = require('../controllers/userController');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
const ColorGameController = require('../controllers/colorgame.server.controller')
const SoundGameController = require('../controllers/soundgame.server.controller')
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')

// cardgame
router.post('/api/games/cardgame', CardGameController.addScore)
// number game route

router.get('/api/numbergame', NumberGameController.getNumberGame)
router.get('/api/colorgame', ColorGameController.getColorGame)
router.get('/api/cardgame', CardGameController.getCardGame)
router.get('/api/soundgame', CardGameController.getCardGame)

// User Routes
router.post('/api/users', UserController.addUser)
router.get('/api/users', UserController.findUser)
router.get('/api/users/:id', UserController.findOneUser)
router.get('/register', UserController.findUser)
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