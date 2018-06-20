import React, { Component, Fragment } from 'react';
import './colorGame.css';

import color from "./color.json";
import ColorCard from "./colorCard";

import Sound from 'react-sound';



class ColorGame extends Component {

    state = {
        correctScore: 0,
        incorrectScore: 0,
        colorNameToGuess: 'Red',  //set to 'Red' initially.....i can't get a randomized initial value here!!!
        color //initially an exact copy of color.json

    }


    //************************************************************************************* */
    //randomRender Function = renders tiles to the page.  Renders in randomized fashion.
    //      Other functions used:  shuffle()
    //*************************************************************************************** */
    randomRender = () => {
        // this.setColorToGuess()  --  this messes it up???
        return (
            this.shuffle(this.state.color).map(colorFromArray =>
                <ColorCard key={colorFromArray.id} id={colorFromArray.id} image={colorFromArray.image} name={colorFromArray.name} handleClicked={this.handleClicked} />
            )
        )
    }

    //************************************************************************************ */
    //shuffle Function = Fisher-Yates Shuffle, shuffles array contents.
    //**************************************************************************************/
    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //************************************************************************************* */
    //reinitialize Function = sets the state variables score and incorrectScore to 0 
    //This function also rerenders the tiles in randomized fashion
    //      Other functions used:  randomRender()
    //*************************************************************************************** */
    reinitialize = () => {
        this.setState({ correctScore: 0 })
        this.setState({ incorrectScore: 0 })

        this.randomRender()
    }



    //*************************************************************************************** */
    //handleClicked Function = determines if correct card is clicked.  Updates state's correct
    //and incorrect scores as needed.  Also sets the colorToGuess in the state.  Also rerenders tiles.
    //      Other functions used:  setColorToGuess(), randomRender()
    //**************************************************************************************** */
    handleClicked = (name) => {
        // console.log(colorNameToGuess)

let correctSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/yes_1.wav")
// let wrongSound = new Audio("http://www.pacdv.com/sounds/mechanical_sound_effects/glass_breaking_2.wav")
let wrongSound = new Audio("http://www.pacdv.com/sounds/fart-sounds/fart-wav-4.wav")


        if (name === this.state.colorNameToGuess) {
            // alert("Yes! ")
            correctSound.play()

            this.setState({ correctScore: this.state.correctScore + 1 })

        }
        else {
            wrongSound.play()
            // alert("No! Supposed to be " + this.state.colorNameToGuess + ". You picked " + name)
            this.setState({ incorrectScore: this.state.incorrectScore + 1 })

        }
        this.setColorToGuess()
        this.randomRender()
    }

    //*************************************************************************************** */
    //setColorToGuess function - picks a color to be guessed.  This is passed to the state.
    //**************************************************************************************** */
    setColorToGuess = () => {
        //Set the correct answer 
        const colorValues = ["Red", "Blue", "Green", "Yellow"]
        const correctAnswer = colorValues[Math.floor(Math.random() * 4)]
        this.setState({ colorNameToGuess: correctAnswer })

    }

    //*************************************************************************************** */
    //renderColortoGuess function - Tells the user what color to pick.  Text in page.
    //**************************************************************************************** */
    renderColortoGuess = () => {
        return this.state.colorNameToGuess
    }



    render() {
        <audio></audio>
        return (

            <Fragment>


                <h1> The Color Game!</h1>
                

                    <div className="container">
                        {this.randomRender()}

<audio autoPlay>
<source src ="./buddy.mp3" type="audio/mp3" />
</audio>
                        <h1 id="colorToGuessText" className="pulsate">{this.renderColortoGuess()}</h1>

                        <h6>Color to guess: {this.state.colorNameToGuess}</h6>
                        <h6>Correct: {this.state.correctScore}</h6>
                        <h6>Incorrect: {this.state.incorrectScore}</h6>

                        <a id='shuffleBtn' className="waves-effect waves-light btn-small">New Game</a>
                    </div>
            </Fragment>
                )
            }
        }
        
        export default ColorGame;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
