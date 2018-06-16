const router = require('express').Router()
const NumberGame = require('../models/numbergame.server.model')
const newNumberGame = new NumberGame()
module.exports = function getNumberGame(req, res) {
    // how do you render react elements again?
    res.send('hi')
    newNumberGame.populateNumberGameQuestionsData((error, numGame) => {
        if (error) throw error;
        res.send('complete')
    })
    // load numbergame page
}
// 