// Import your models
const NumberGame = require('../models/numbergame.server.model')
const CardGame = require('../models/cardgame.server.model')


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
    
    seedCardGame : function() {
        const CardGameArray = [
            {
                name : "SUSHI",
                image : "https://orig00.deviantart.net/c3c8/f/2012/126/a/d/suchi_kawaii_by_edicioneslulu-d4yrtib.png",
                sound: ""
            },
            {
                name : "BURGER", 
                image : "https://orig00.deviantart.net/830e/f/2012/052/4/5/gatito_hamburguesa_png_by_maniconfitado-d4qjhoh.png",
                sound : ""
            },
            {
                name : "RAMEN",
                image : "https://3.bp.blogspot.com/-sZDwIbxGlLI/V_ImVJmhN3I/AAAAAAAALxc/dldRNG-0X4cTST4tfDzkpA5W0QUWjND8ACLcB/s1600/food-stickers_0012_Layer27.png",
                sound : ""
            },
            {
                name : "SUSHI",
                image : "https://orig00.deviantart.net/c3c8/f/2012/126/a/d/suchi_kawaii_by_edicioneslulu-d4yrtib.png",
                "sound": ""
            },
            {
                name : "BURGER", 
                image : "https://orig00.deviantart.net/830e/f/2012/052/4/5/gatito_hamburguesa_png_by_maniconfitado-d4qjhoh.png",
                sound : ""
            },
            {
                name : "RAMEN",
                image : "https://3.bp.blogspot.com/-sZDwIbxGlLI/V_ImVJmhN3I/AAAAAAAALxc/dldRNG-0X4cTST4tfDzkpA5W0QUWjND8ACLcB/s1600/food-stickers_0012_Layer27.png",
                sound : ""
            },
            {
                name : "SUSHI",
                image : "https://orig00.deviantart.net/c3c8/f/2012/126/a/d/suchi_kawaii_by_edicioneslulu-d4yrtib.png",
                "sound": ""
            },
            {
                name : "BURGER", 
                image : "https://orig00.deviantart.net/830e/f/2012/052/4/5/gatito_hamburguesa_png_by_maniconfitado-d4qjhoh.png",
                sound : ""
            },
            {
                name : "RAMEN",
                image : "https://3.bp.blogspot.com/-sZDwIbxGlLI/V_ImVJmhN3I/AAAAAAAALxc/dldRNG-0X4cTST4tfDzkpA5W0QUWjND8ACLcB/s1600/food-stickers_0012_Layer27.png",
                sound : ""
            },
            {
                name : "SUSHI",
                image : "https://orig00.deviantart.net/c3c8/f/2012/126/a/d/suchi_kawaii_by_edicioneslulu-d4yrtib.png",
                "sound": ""
            },
            {
                name : "BURGER", 
                image : "https://orig00.deviantart.net/830e/f/2012/052/4/5/gatito_hamburguesa_png_by_maniconfitado-d4qjhoh.png",
                sound : ""
            },
            {
                name : "RAMEN",
                image : "https://3.bp.blogspot.com/-sZDwIbxGlLI/V_ImVJmhN3I/AAAAAAAALxc/dldRNG-0X4cTST4tfDzkpA5W0QUWjND8ACLcB/s1600/food-stickers_0012_Layer27.png",
                sound : ""
            }
        ]  
      
        // save  to Cardgames collection
        for (CardGameQuestion of CardGameArray) {
          var newCardGame = new CardGame(CardGameQuestion);
          newCardGame.save();
        }
      
        // seeded!
        console.log('Card Game Database seeded!');
    },
}