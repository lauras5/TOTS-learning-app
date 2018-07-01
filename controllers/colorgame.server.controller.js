const ColorGame = require('../models/colorgame.server.model')

module.exports = {
    getColorGame: function (req, res) {
        NumberGame
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
