const router = require("express").Router();
const numberGameController = require("../controllers/numbergame.server.controller");


// NUMBER GAME API ROUTES

// Matches with "/api/
router.route("/numbergame")
  .get(numberGameController.getNumberGame)






// CARD GAME API ROUTES
module.exports = router;
