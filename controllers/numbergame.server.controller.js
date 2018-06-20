const router = require('express').Router()
const NumberGame = require('../models/numbergame.server.model')
const newNumberGame = new NumberGame()
module.exports = {
    getNumberGame: function (req, res) {
    // how do you render react elements again?
    res.send('hi there')
    // load numbergame page
    },

    hello: function () {
        console.log('hello there!')
    }
}
// 

