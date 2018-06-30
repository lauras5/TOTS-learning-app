// Import your models
const NumberGame = require('../models/numbergame.server.model')
// const CardGame = require('../models/cardgame.server.model')
const ColorGame = require('../models/colorgame.server.model')


// If anyone has any data that they need to populate for their game, please create a new function
// Naming convention: seed[ModelName]


module.exports = {
    seedNumberGame : function() {
        const numberGameQuestionArray = [
            {
                question: "How Many Apples Are There?",
                questionImage: "./components/NumberGame/img/apples.jpg",
                choices:[1, 3, 4, 6], 
                correctAnswerIndex: 2
            },
            {
                question: "How Many Oranges Are There?",
                questionImage: "./components/NumberGame/img/oranges.jpg",
                choices:[6, 4, 9, 5], 
                correctAnswerIndex: 0
            },
            {
                question: "How Many Strawberries Are There?",
                questionImage: "./components/NumberGame/img/strawberries.jpg",
                choices:[1, 2, 3, 4], 
                correctAnswerIndex: 2
            },
            {
                question: "How Many Cherries Are There?",
                questionImage: "./components/NumberGame/img/cherries.jpg",
                choices:[1, 2, 5, 10], 
                correctAnswerIndex: 1
            },
            {
                question: "How Many Cookies Are There?",
                questionImage: "./components/NumberGame/img/cookies.jpg",
                choices:[2, 3, 4, 5], 
                correctAnswerIndex: 3
            }
        ];
      
        // save question to numbergames collection
        for (numberGameQuestion of numberGameQuestionArray) {
          var newNumberGameQuestion = new NumberGame(numberGameQuestion);
          newNumberGameQuestion.save();
        }

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
      
        console.log('Card Game Database seeded!');
    },

    seedColorGame : function () {
        const colorGameArray = [
            {
            index: 1,
            name: "Red",
            image: "https://lh3.googleusercontent.com/-pHPulqP9R1w/WxHr7TPKBFI/AAAAAAAFGuI/TOMn0BKK298nYDlbK3EF1Sywln2Dm2xTQCHMYCw/s640/smiley.gif"
            },
            {
            index: 2,
            name: "Blue",
            image: "https://media.giphy.com/media/SovwqF8EP8RYQ/giphy.gif"
            },
            {
            index: 3,
            name: "Green",
            image: "http://i180.photobucket.com/albums/x1/DrEnKa_bcn/flipao_grande.gif"
            },
            {
            index: 4,
            name": "Yellow",
            image: "http://smiliesftw.com/huge/huge_eek3.gif"
            }
        ]

        for (colorGameQuestion of colorGameArray) {
            var newColorGame = new ColorGame(colorGameQuestion);
            newColorGame.save();
          }

          console.log('Color Game Database seeded!');
    }
}