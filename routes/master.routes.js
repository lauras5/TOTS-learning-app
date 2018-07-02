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

// number game route

router.get('/api/numbergame', NumberGameController.getNumberGame)
router.get('/api/colorgame', ColorGameController.getColorGame)
router.get('/api/cardgame', CardGameController.getCardGame)

// User Routes
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