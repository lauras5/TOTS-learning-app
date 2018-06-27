import React, { Component, Fragment } from 'react';
import './colorGame.css';
import color from "./color.json";
import ColorCard from "./colorCard";
import Modal from 'react-responsive-modal';


class ColorGame extends Component {
    state = {
        correctScore: 0,
        incorrectScore: 0,
        questionNum: 0,  //tracks how many questions are asked so far
        colorNameToGuess: 'Red',  //set to 'Red' initially.....i can't get a randomized initial value here!!!
        color, //initially an exact copy of color.json
        open: false //for Modal
    }



    //************************************************************************************* */
    //randomRender Function = renders tiles to the page.  Renders in randomized fashion.
    //      Other functions used:  shuffle()
    //*************************************************************************************** */
    randomRender = () => {
        //this.setColorToGuess()

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

        // let correctSound = new Audio("./soundFiles/success.wav")
        let correctSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/yes_1.wav")
        let wrongSound = new Audio("http://www.pacdv.com/sounds/fart-sounds/fart-wav-4.wav")
        this.setState({ questionNum: this.state.questionNum + 1 })
        if (this.state.questionNum >= 10) {

            //WRITE RESULTS TO DB HERE

            let thud = new Audio("./soundFiles/thud.wav")
            thud.play()
            { this.onOpenModal() }
            { this.modalPlayAgain() }
        }
        else {
            if (name === this.state.colorNameToGuess) {

                correctSound.play()

                this.setState({ correctScore: this.state.correctScore + 1 })
            }
            else {
                wrongSound.play()

                this.setState({ incorrectScore: this.state.incorrectScore + 1 })
            }
            this.setColorToGuess()
            this.randomRender()
        }
    }




    //*************************************************************************************** */
    //handleClickedPulsatingText function - audio file played when pulsating text is clicked
    //                                
    //**************************************************************************************** */
    handleClickedPulsatingText = () => {
        let colorSoundFile = ''
        switch (this.state.colorNameToGuess) {
            case 'Red':
                colorSoundFile = "./soundFiles/red.wav"
                break;
            case 'Blue':
                colorSoundFile = "./soundFiles/blue.wav"
                break;
            case 'Green':
                colorSoundFile = "./soundFiles/green.wav"
                break;
            case 'Yellow':
                colorSoundFile = "./soundFiles/yellow.wav"
                break;
            default:
                colorSoundFile = ""
        }
        let sayColor = new Audio(colorSoundFile)
        sayColor.play()
    }

    //*************************************************************************************** */
    //handleClickedPlayAgain function - handles click event to play again from Modal. 
    //                                - resets game values to 0 and restarts game
    //**************************************************************************************** */
    handleClickPlayAgain = () => {
        let againSound = new Audio("./soundFiles/playagain.wav")
        againSound.play()
        this.setState({ correctScore: 0, incorrectScore: 0, questionNum: 0, colorNameToGuess: 'Blue' })
        this.onCloseModal()
    }


    //*************************************************************************************** */
    //handleClickedNotPlayAgain function - handles click event to NOT play again from Modal. 
    //                                   - exits colorGame and goes back to home
    //**************************************************************************************** */
    handleClickNotPlayAgain = () => {
        let click = new Audio("./soundFiles/click.wav")
        click.play()
        alert("GOES BACK TO HOME PAGE")
        this.onCloseModal()
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
        // let colorSoundFile = ''
        // switch (this.state.colorNameToGuess) {
        //     case 'Red':
        //         colorSoundFile = "./soundFiles/red.wav"
        //         break;
        //     case 'Blue':
        //         colorSoundFile = "./soundFiles/blue.wav"
        //         break;
        //     case 'Green':
        //         colorSoundFile = "./soundFiles/green.wav"
        //         break;
        //     case 'Yellow':
        //         colorSoundFile = "./soundFiles/yellow.wav"
        //         break;
        //     default:
        //         colorSoundFile = ""
        // }
        // let sayColor = new Audio(colorSoundFile)
        // setTimeout(function () { sayColor.play() }, 1000)
        return (
            <div>
                <div className="pulsate" onClick={this.handleClickedPulsatingText} style={{ color: this.state.colorNameToGuess, fontSize: 200 }}>{this.state.colorNameToGuess}</div>
            </div>
        )
    }


    //*************************************************************************************** */
    //Modal open and close functions
    //**************************************************************************************** */
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    //*************************************************************************************** */



    //***************************************************************************************/
    //Modal render - render the modal
    //*************************************************************************************
    modalPlayAgain = () => {
        // {this.onOpenModal()}
        let colorGameCorrect = `Correct: ${this.state.correctScore}`
        let colorGameWrong = `Incorrect: ${this.state.incorrectScore}`


        return (

            <div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h3>Color Game Score</h3>
                    <h4 className="modalStatsCorrect">{colorGameCorrect}</h4>
                    <h4 className="modalStatsIncorrect">{colorGameWrong}</h4>

                    <h3 id="playAgainModalText">Play again?</h3>
                    <card col-6 id="colorPlayAgain" onClick={this.handleClickPlayAgain}><img src="https://i.pinimg.com/originals/f0/8b/99/f08b998f7548448a73134f4d21c4b5f3.gif" /></card>
                    <card col-6 id="colorNotPlayAgain" onClick={this.handleClickNotPlayAgain}><img src="https://www.smileysapp.com/gif-emoji/thumbs-down.gif" /></card>
                </Modal>
            </div>
        )
    }






    render() {
        const { open } = this.state;
        return (

            <Fragment>

                <div id="colorGamePage">
                    <h1> The Color Game!</h1>
                    <div className="container">
                        <div className="rowColors">
                            {this.randomRender()}
                        </div>
                    </div>

                    <h1> Which face is.....</h1>
                    <h1>{this.renderColortoGuess()}</h1>
                    <h1>{10 - this.state.questionNum} to go!</h1>

                </div>
                {this.modalPlayAgain()}
            </Fragment>
        )
    }
}
export default ColorGame;















