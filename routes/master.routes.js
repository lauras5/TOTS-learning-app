// requiring user controller
const UserController = require('../controllers/userController');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
// requiring express router
const express = require('express');
<<<<<<< HEAD
const router = express.Router();
const User = require('../models/UserModel')


    // testing routes
    router.get('/api', UserController.login)
        // .get(UserController.login)

    // Route to number game
    router.get('/api/numbergame', NumberGameController.getNumberGame)
        // .get(NumberGameController.getNumberGame)
        // .post(NumberGameController)

    // Route to Card Game 
    // router.get('/games/cardgame/time')
    //     .get(CardGameController.getTime)
    //     .post(CardGameController.setTime)

    // User Routes
    router.post('/api/users', UserController.addUser)
    router.get('/api/users', UserController.findUsers)
        // .post(UserController.addUser)
        // .get(UserController.authenticate)
        // .get(UserController.findUsers)
    
module.exports = router
=======
const Router = express.Router();

module.exports = function(Router){
    // testing routes
    Router.route('games/hello').get()
    
    // Route to number game
    Router.route('/games/numbergame').get(NumberGameController.getNumberGame)
    
    // Route to Card Game 
    // Router.route('/games/cardgame').get(CardGameController)
    Router.route('/games/cardgame/time').post(CardGameController.setTime)
    
    // Parents Page requests
    Router.route('/games/cardgame/time').get(CardGameController.getTime)
    
    // User Routes
    Router.route('/api/users').get(UserController.findUsers)
    Router.route('/api/users').post(UserController.addUser)
}
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2
