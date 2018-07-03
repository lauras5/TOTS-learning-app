const User = require('../models/UserModel');

module.exports = {
    // adds users to db // working as of 6/28 DONT TOUCH
    addUser: function (req, res) {
        console.log(req.body)

        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            child: req.body.child
        }
        User
            .create(user)
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)
            })
            .catch(err => res.status(422).json(err))
    },

    findUser: function (req, res) {
        console.log(res)
        console.log(req)
        User
            .findOne({username : req.username})
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)
            })
            .catch(err => res.status(422).json(err))

            console.log(req.session.username)
        
            sessionStorage.setItem("USER", req.body.username)
    },
<<<<<<< HEAD
=======
  
>>>>>>> 136ca66ffd2a0037d6ce44b0e685ee7864695725
    findOneUser: function (req, res) {
        User
            .findOne({ username: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // authentication for login
    authenticate: function (req, res, next) {
        console.log(req.body)

        const username = req.body.username

        User
            .findOne({ 'username': username })
        if (!username) {
            req.session.success = 'You are successfully logged in ' + req.body.username + '!'
        } else (
            console.log('horray it works: ' + username)
        )
    },

    login: function (req, res) {
        console.log('user signup')
        // req.session.username = req.body.username
        res.send()

        // find users
        // findUsers: function (req, res) {
        //     User
        //         .findOne({ 'username': req.body.data.username })
        //         .then(dbModel => res.json(dbModel))
        //         .catch(err => res.status(422).json(err))
        // }

        // updateCardGame : function (req, res) {
        //     User
        //         .findOne({username : req.session.username})
    }

}
