const mongoose = require('mongoose');
const Schema = mongoose.Schema

// require passport auth
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema ({
    username : {
        type : String,
        default: 'Quinchilla',
        required : true
    },
    email : {
        type: String, 
        default: 'abc@gmail.com',
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
        scores: [Number],
    },
    memoryGame : {
        timesPlayed: Number,
        times: [Number],
    },
    colorGame : {
        timesPlayed: Number,
        correct: Number,
        incorrect: Number
    },
    otherGame : {
        timesPlayed: Number,
        scores: [Number],
    },
});

UserSchema.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', UserSchema);

