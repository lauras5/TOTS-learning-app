var Router = require('express').Router();
var db = require('../models')

//testing routes
Router.get('/test', (req, res) => {
    res.send('testing routes')
})

// searches user db and returns all
Router.get('/users', (req, res) => {
    db.User.find({})
        .then(r => {
            res.json(r)
        })
        .catch(e => {
            console.log(e)
        });
});

// finds user by id
Router.get('/users/:id', (req, res) => {
    //req.params.id
    db.Usr.findById(req.params.id)
        .then(r => {
            res.json(r)
        })
        .catch(e => {
            console.log(e)
        });
});

// posts new user to db
Router.post('/users', (req, res) => {
    db.User.create({
        name: req.body.name,
        email: req.body.email
    })
        .then(r => {
            res.json(r)
        })
        .catch(e => {
            console.log(e)
        });
});

Router.get('/api/user', function (req, res) {
    res.send({ express: 'Hello From Express' })
});

module.exports = Router