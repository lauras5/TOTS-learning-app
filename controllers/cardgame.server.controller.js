var Router = require('express').Router();
var db = require('../models')

//testing routes
module.exports = {
    getCardGame: function (req, res) {
        db.User.find()
            .then(res.send('/games/cardgame'))

    },

    setTime: function (req, res) {
        db.User.update({
            name : 'testy',
            email: 'testy@gmail.com',
            numberGame : {timesPlayed: 1, scores: 5},
            memoryGame : {timesPlayed: 1, scores: 20},
            
            // add to user schema
        })
    },

    getTime: function(req, res) {
        db.User.find(function(err) {
            if (err) throw err;
            res.send('/games/cardgame/time')
        })

    }

}
