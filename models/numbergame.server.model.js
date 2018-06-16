var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NumberGameSchema = new Schema({
    question: String,
    questionImage: String,
    choices: [Number],
    correctAnswerIndex: Number
});

NumberGameSchema.methods.populateNumberGameQuestionsData = function populateNumberGameQuestionsData (cb) {
    const numberGameQuestionArray = [
        {
            question: "How Many Apples Are There?",
            questionImage: "",
            choices:[1, 3, 4, 6], 
            correctAnswerIndex: 2
        },
        {
            question: "How Many Oranges Are There?",
            questionImage: "",
            choices:[6, 4, 9, 5], 
            correctAnswerIndex: 0
        },
        {
            question: "How Many Strawberries Are There?",
            questionImage: "",
            choices:[1, 2, 3, 4], 
            correctAnswerIndex: 2
        },
        {
            question: "How Many Cherries Are There?",
            questionImage: "",
            choices:[1, 2, 5, 10], 
            correctAnswerIndex: 1
        },
        {
            question: "How Many Cookies Are There?",
            questionImage: "",
            choices:[2, 3, 4, 5], 
            correctAnswerIndex: 3
        }
    ]
    this.model('NumberGame').save(error => {
        if (error) throw error;
    });
};

var NumberGame = mongoose.model('NumberGame', NumberGameSchema);

module.exports = NumberGame;