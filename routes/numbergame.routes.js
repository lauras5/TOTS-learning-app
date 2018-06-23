const NumberGameController = require('../controllers/numbergame.server.controller');
const router = require('express').Router();

// Route to main game page (HTML Request)
router.route('/games/numbergame').get(NumberGameController.getNumberGame)

router.route('games/hello').get()

module.exports = router;