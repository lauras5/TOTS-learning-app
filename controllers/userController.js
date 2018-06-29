const User = require('../models/UserModel');

module.exports = {
    addUser: function (req, res) {

        // const {username, email, password, child} = req.body.user

        console.log(req.body)
        // const body = req.body.userdata.user

        // console.log(body.email)

        const user = {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            child : req.body.child
        }

        // console.log('user :  ' + {user})

        User
            .create(user)
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)   
            })
            .catch(err => res.status(422).json(err))
       
    },
    findUsers: function (req, res) {
        User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    authenticate: function(req, res) {
        User
            .register(new User({ user: req.body.user }), req.body.user.password, function (err, account) {
            if (err) {
                return res.send('error')
            }
            passport.authenticate('local')(req, res, function () {
                res.redirect('/home')
            })
        })
    },

    login : function (req, res) {
        res.json({username : 'Laura', email: 'laura@gmail.com', password: 'pword123', child : 'Aubrey'})
        console.log('works')  
    }
}
