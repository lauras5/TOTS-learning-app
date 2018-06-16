const NumberGameController = require('../controllers/numbergame.server.controller');
const router = require('express').Router();

// Route to main game page (HTML Request)
router.route('/games/numbergame').get(NumberGameController)



module.exports = router;