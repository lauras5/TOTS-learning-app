const express = require('express')
const router = express.Router();
const User = require('../models/UserModel');

module.exports = {
    findUsers : function (req, res) {
        User.findAll()
            .then(res.send('/api/users'))
    },
    findPlayer : function (req, res) {
        User.findById(id)
            .then(res.send('/api/users/' + id))
    },
    addUser : function (req, res) {
        User.create()
            .then(res.send('/api/users'))
            .catch()
    }
}
