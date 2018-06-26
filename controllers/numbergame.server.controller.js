const NumberGame = require('../models/numbergame.server.model')

module.exports = {
    getNumberGame: function (req, res) {
        NumberGame
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

