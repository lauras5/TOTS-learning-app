const mongoose = require('mongoose');
const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema ({
    name : {
        type : String,
        default: 'Quinchilla'
    },
    email : {
        type: String, 
        default: 'abc@gmail.com'
    },
    numberGame : {
        timesPlayed: Number,
        averageScore: Number,
    },
    memoryGame : {
        timesPlayed: Number,
        averageScore: Number,
    },
    otherGame : {
        timesPlayed: Number,
        averageScore: Number,
    },
});

const User = mongoose.model('User', User);
 
User.plugin(passportLocalMongoose);
