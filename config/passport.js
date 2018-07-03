// const mongoose = require('mongoose');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/UserModel')

// passport.use(new LocalStrategy(function(username, password, done) {
//     User.findOne({username : username}, function(err, user) {
//         if(err) {
//             return done(null, false,  {message : 'Incorrect username/password, please try again'})
//         } else if (!user){
//             return done (null, false, {message : 'Incorrect username/password please try again'}) 
//         }
//         return done(null, user)
//     });
// }));