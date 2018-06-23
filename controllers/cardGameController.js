var Router = require('express').Router();
var db = require('../models')

//testing routes
module.exports = {
    getCardGame: function (req, res) {
        db.User.find()
            .then(res.send('/games/cardgame'))
    },
    updateTime: function (req, res) {
        db.User.findById({ _id: id })
    },
    getTime: function(req, res) {
        db.User.find(function(err) {
            if (err) throw err;
            res.send('/games/cardgame/time')
        })
    }
}
