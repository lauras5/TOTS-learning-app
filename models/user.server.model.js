var mongoose = require('mongoose');

var Schema = mongoose.Schema
var usermodel = new Schema ({
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

const User = mongoose.model('User', usermodel);

module.exports = User;