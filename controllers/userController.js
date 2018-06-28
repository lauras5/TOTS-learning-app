const User = require('../models/UserModel');

module.exports = {
    addUser: function (req, res) {
        User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

        console.log(res.data)
    },
    findUsers: function (req, res) {
        User
            .findAll()
            .then(res.send('/api/users'))
    }
}
