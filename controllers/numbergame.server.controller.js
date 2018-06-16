const router = require('express').Router()
const NumberGame = require('../models/numbergame.server.model')

// HTML Routes
router.get('/games/numbergame', (req, res) => {
    // how do you render react elements again?
    res.send('hi')
    NumberGame.populateNumberGameQuestionsData((error, numGame) => {
        if (error) throw error
        res.send('complete')
    })
    // load numbergame page
})