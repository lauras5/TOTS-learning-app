const express = require('express')
const router = express.Router();
const User = require('../models/UserModel');

module.exports = {
    findUsers : function (req, res) {
        User.findAll()
            .then(res.send('/api/users'))
    },
    findPlayer : function (req, res) {
        User.findById(id)
            .then(res.send('/api/users/' + id))
    },
<<<<<<< HEAD
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
=======
    addUser : function (req, res) {
        User.create()
            .then(res.send('/api/users'))
            .catch()
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2
    }
}
