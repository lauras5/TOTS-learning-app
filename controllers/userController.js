const User = require('../models/UserModel');

module.exports = {
    // adds users to db // working as of 6/28 DONT TOUCH
    addUser: function (req, res) {
        // console.log(req.body)

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
        User
            .findOne({ username: req.username })
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)
            })
            .catch(err => res.status(422).json(err))

    },

    findOneUser: function (req, res) {
        User
            .findOne({ username: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },


    updateNumberGameUser: function (req, res) {
        User
            .findOneAndUpdate({ username: req.params.id }, 
                { $set : { numberGame : {
                    timesPlayed: req.body.timesPlayed,
                    correctCount: req.body.correctCount,
                    incorrectCount: req.body.incorrectCount
                    } }
                })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // authentication for login
    authenticate: function (req, res, next) {
        console.log('username : '+ JSON.stringify(req.body))

        // User
        //     .findOne({ 'username': req.body.username })

        // if (!username) {
        //     console.log('no username')
        // } else (
        //     console.log('horray it works: ' + req.body.username)
        // )
    },

    login: function (req, res) {
        // console.log('login username: ' + JSON.stringify(req.body))

        // find users
        User
            .findOne({ username: req.body })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }

}

