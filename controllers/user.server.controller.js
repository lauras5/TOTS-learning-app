const User = require('../models/user.server.model');

module.exports = {
    findAll: function(req, res) {
        User
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findPlayer : function (req, res) {
        User.findById(id)
            .then(res.send('/api/users/' + id))
    },
    addUser : function (req, res) {
        User.create()
            .then(res.send('/api/users'))
            .catch()
    },
    updateUser: function(req, res) {
        User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findUserById: function(req, res) {
        User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}
