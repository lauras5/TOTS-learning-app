const mongoose = require('mongoose');
const Schema = mongoose.Schema

// require passport auth
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema ({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type: String, 
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    child : {
        type : String,
        required : true
    },
    numberGame : {
        timesPlayed: Number,
        correctCount: Number,
        incorrectCount: Number
    },
    cardGame : {
        timesPlayed: Number,
        times: [Number],
    },
    colorGame : {
        timesPlayed: Number,
        correctCount: Number,
        incorrectCount: Number
    },
    shapeGame : {
        timesPlayed: Number,
        correctCount: Number,
        incorrectCount: Number
    },
    soundGame : {
        timesPlayed: Number,
        correctCount: Number,
        incorrectCount: Number
    }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User

