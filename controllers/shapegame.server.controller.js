const ShapeGame = require('../models/shapegame.server.model')

module.exports = {
    getShapeGame: function (req, res) {
        ShapeGame
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
