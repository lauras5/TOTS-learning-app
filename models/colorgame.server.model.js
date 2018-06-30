var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorGameSchema = new Schema({
    question: String,
    questionImage: String,
    choices: [Number],
    correctAnswerIndex: Number
});

var ColorGame = mongoose.model('ColorGame', ColorGameSchema);

module.exports = ColorGame;4