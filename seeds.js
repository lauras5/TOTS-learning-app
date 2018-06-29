// Import your models
const NumberGame = require('./models/numbergame.server.model')

// If anyone has any data that they need to populate for their game, please create a new function
// Naming convention: seed[ModelName]

module.exports = {
    seedNumberGame : function() {
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
        ];
      
        // save question to numbergames collection
        for (numberGameQuestion of numberGameQuestionArray) {
          var newNumberGameQuestion = new NumberGame(numberGameQuestion);
          newNumberGameQuestion.save();
        }
      
        // seeded!
        console.log('Number Game Database seeded!');
    },

    // Feel free to remove this when adding future seeds, this is just a test I had in there to make sure as well as 
    // just serves as an example on how to add it as well
    hello: function () { console.log('hi') }
   
}