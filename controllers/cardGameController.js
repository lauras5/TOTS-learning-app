var Router = require('express').Router();
var User = require('../models/UserModel')

//testing routes
module.exports = {
    getCardGame: function (req, res) {
        User
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    addScore: function (req, res) {
        User
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    getScores: function (req, res) {
        User
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}
