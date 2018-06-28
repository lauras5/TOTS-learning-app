// requiring user controller
const UserController = require('../controllers/userController');
// requiring number game controller
const NumberGameController = require('../controllers/numbergame.server.controller');
// requiring card game controller
const CardGameController = require('../controllers/cardGameController')
// requiring express router
const express = require('express');
const Router = express.Router();
const User = require('../models/UserModel')

module.exports = function (Router) {
    // testing routes
    Router.route('games/hello')
        .get()

    // Route to number game
    Router.route('/api/numbergame')
        .get(NumberGameController.getNumberGame)

    // Route to Card Game 
    // Router.route('/games/cardgame').get(CardGameController)
    Router.route('/games/cardgame/time')
        .post(CardGameController.setTime)

    // Parents Page requests
    Router.route('/games/cardgame/time')
        .get(CardGameController.getTime)



    // User Routes
    Router.route('/api/users')
        .post(UserController.addUser)

    // Router.route('/api/users')
    //     .get(UserController.findUsers)

    Router.get('/api/users', (req, res) => {
        User.create(req.body)
        console.log(req)
        console.log(res)
    })


    Router.post('/api/users', (req, res) => {
        User.register(new User({ name: req.body.username }), req.body.password, function (err, account) {
            if (err) {
                return res.send('error')
            }
            passport.authenticate('local')(req, res, function () {
                res.redirect('/home')
            })
        })
    })

    Router.get('/login', function(req, res) {
        res.render('login', {User : req.user})
    })

}