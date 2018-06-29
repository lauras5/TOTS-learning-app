const User = require('../models/UserModel');

module.exports = {
    // adds users to db // working as of 6/28 DONT TOUCH
    addUser: function (req, res) {

        const user = {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            child : req.body.child
        }

        User
            .create(user)
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)   
            })
            .catch(err => res.status(422).json(err))
       
    },

     // authentication for login
     authenticate: function(req, res) {
        console.log('req.body : ' + req.body)
        
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


    findUsers: function (req, res) {
        User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

   
    login : function (req, res) {
        res.json({username : 'Laura', email: 'laura@gmail.com', password: 'pword123', child : 'Aubrey'})
        console.log('works')  
        res.redirect('/home')
    }
}
