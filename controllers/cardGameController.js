var Router = require('express').Router();
var User = require('../models/UserModel')
var CardGame = require('../models/cardGame.server.model')

//testing routes
module.exports = {
    getCardGame: function (req, res) {
        CardGame
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    addScore: function (req, res) {
        CardGame
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    getScores: function (req, res) {
        CardGame
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}
