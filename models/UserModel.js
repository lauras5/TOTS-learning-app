const mongoose = require('mongoose');
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema ({
    username : {
        type : String,
        // default: 'Quinchilla', I dont think we actually need this, right?
        required : true
    },
    email : {
        type: String, 
        // default: 'abc@gmail.com', I dont think we actually need this, right?
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    
    childName: String,

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
        correct: Number,
        incorrect: Number
    },
    shapeGame : {
        timesPlayed: Number,
        scores: [Number],
    },
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User

