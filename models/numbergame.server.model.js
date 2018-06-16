var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NumberGameSchema = new Schema({
    question: String,
    questionImage: String,
    choices: [String],
    correctAnswerIndex: Number
});

NumberGameSchema.methods.populateNumberGameQuestionsData = function populateNumberGameQuestionsData (cb) {
    const numberGameQuestionArray = [
        {
            question: "How Many",
            questionImage: ""
            choices:, 
            correctAnswerIndex: 
        }
    ]

    
    this.model('NumberGame').save(error => {
        if (error) throw error
    })
}
