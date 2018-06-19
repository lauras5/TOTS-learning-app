const mongoose = require('mongoose');
const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema ({
    name : {
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
    numberGame : {
        timesPlayed: Number,
        scores: [Number],
    },
    memoryGame : {
        timesPlayed: Number,
        times: [Number],
    },
    otherGame : {
        timesPlayed: Number,
        scores: [Number],
    },
});

const User = mongoose.model('User', User);
 
User.plugin(passportLocalMongoose);
