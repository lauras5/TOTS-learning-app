var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NumberGameSchema = new Schema({
    question: String,
    questionImage: String,
    choices: [Number],
    correctAnswerIndex: Number
});

var NumberGame = mongoose.model('NumberGame', NumberGameSchema);

module.exports = NumberGame;