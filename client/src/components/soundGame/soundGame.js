import React, { Component, Fragment } from 'react';
import './soundGame.css';
import sound from "./sound.json";
import SoundCard from "./soundCard";
import API from '../../utils/API';
import Modal from 'react-responsive-modal';
import { Redirect } from 'react-router'
import Navbar from '../Navbar'


class SoundGame extends Component {
    state = {
        correctScore: 0,
        incorrectScore: 0,
        questionNum: 0,  //tracks how many questions are asked so far
        soundNameToGuess: "Moooo!",//set to 'Dog' initially.....i can't get a randomized initial value here!!!
        sound, //hold shapes to drag to - an exact copy of shape.json
        open: false, //for Modal
        currentUser: {},
        toHome: false
    }

    componentDidMount() {
        const currentUserName = sessionStorage.getItem('username')
        this.loadCurrentUser(currentUserName)
    };

    loadCurrentUser = (currentUserName) => {
        API.getCurrentUser(currentUserName)
            .then(res => {
                // if user is null, handle it: perhaps route to login page
                this.setState({ currentUser: res.data })
            })
    };

    postUserScoreToProfile = (currentUserName) => {
        const user = this.state.currentUser
        const soundGame = user.soundGame

        const soundGameObj = {
            timesPlayed: soundGame.timesPlayed,
            correctCount: soundGame.correctCount,
            incorrectCount: soundGame.incorrectCount
        }

        // Add scores and times played
        soundGameObj.timesPlayed++
        soundGameObj.correctCount += this.state.correctScore
        soundGameObj.incorrectCount += this.state.incorrectScore

        // Update Number Game User with 
        API.updateSoundGameUser(currentUserName, soundGameObj)
    };


    //************************************************************************************* */
    //randomRender Function = renders tiles to the page.  Renders in randomized fashion.
    //      Other functions used:  shuffle()
    //*************************************************************************************** */
    randomRender = () => {
        return (
            this.shuffle(this.state.sound).map(shapeFromSoundArray =>
                <div className="card col-s2 soundCardIndividual" onClick={this.handleClicked} key={shapeFromSoundArray.name}>
                    <div className="card-title">{shapeFromSoundArray.name} </div>
                    <div className="img-container">
                        <img
                            alt={shapeFromSoundArray.name}
                            src={shapeFromSoundArray.image}
                        />
                    </div>
                </div>)
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


    // *************************************************************************************** */
    // handleClicked Function = determines if correct card is clicked.  Updates state's correct
    // and incorrect scores as needed.  Also sets the shapeToGuess in the state.  Also rerenders tiles.
    //      Other functions used:  setShapeToGuess(), randomRender()
    // **************************************************************************************** */
    handleClicked = (e) => {
        console.log("handleClicked")
        let correctSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/yes_1.wav")
        let wrongSound = new Audio("http://www.pacdv.com/sounds/fart-sounds/fart-wav-4.wav")
        this.setState({ questionNum: this.state.questionNum + 1 })

        let animalSound = ''
        switch (e.target.alt) {
            case "Dog":
                animalSound = 'Bark!'
                break
            case "Cat":
                animalSound = 'Meow!'
                break
            case "Cow":
                animalSound = 'Moooo!'
                break
            case "Bear":
                animalSound = 'Growl!'
                break
            case "Duck":
                animalSound = 'Quack!'
                break
            default:
                animalSound = ""
        }

        console.log("Name: ", e.target.alt)
        console.log("AnimalSound", animalSound)
        if (animalSound === this.state.soundNameToGuess) {

            correctSound.play()
            this.setState({ correctScore: this.state.correctScore + 1 })
            this.setSoundToGuess()

        }
        else {

            wrongSound.play()
            this.setState({ incorrectScore: this.state.incorrectScore + 1 })
            this.setSoundToGuess()
            
        }
        

        //exit condition in bottom
        if (this.state.questionNum > 8) {

            //WRITE RESULTS TO DB HERE

            let thud = new Audio("http://www.pacdv.com/sounds/domestic_sound_effects/door-close-1.wav")
            thud.play()
            { this.onOpenModal() }
            { this.modalPlayAgain() }
        }


    }






    //*************************************************************************************** */
    //handleClickedPlayAgain function - handles click event to play again from Modal. 
    //                                - resets game values to 0 and restarts game
    //**************************************************************************************** */
    handleClickPlayAgain = () => {
        let againSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/laugh-12.wav")
        againSound.play()

        const currentUserName = sessionStorage.getItem('username')
        this.postUserScoreToProfile(currentUserName)
        this.loadCurrentUser(currentUserName)
        this.setState({ correctScore: 0, incorrectScore: 0, questionNum: 0, soundNameToGuess: 'Bark' })
        this.setSoundToGuess()
        // this.renderSoundToGuess()
        this.onCloseModal()
    }


    //*************************************************************************************** */
    //handleClickedNotPlayAgain function - handles click event to NOT play again from Modal. 
    //                                   - exits shapeGame and goes back to home
    //**************************************************************************************** */
    handleClickNotPlayAgain = () => {
        let click = new Audio("http://www.pacdv.com/sounds/domestic_sound_effects/door-close-1.wav")
        click.play()

        const currentUserName = sessionStorage.getItem('username')
        this.postUserScoreToProfile(currentUserName)
        this.loadCurrentUser(currentUserName)
        this.onCloseModal()
        this.setState({ toHome: true })
    }


    //*************************************************************************************** */
    //setSoundToGuess function - picks a color to be guessed.  This is passed to the state.
    //**************************************************************************************** */
    setSoundToGuess = () => {
        //Set the correct answer 
        const colorValues = ["Bark!", "Moooo!", "Quack!", "Meow!", "Growl!"]
        const correctAnswer = colorValues[Math.floor(Math.random() * 5)]
        this.setState({ soundNameToGuess: correctAnswer })
    }

    //*************************************************************************************** */
    //renderSoundToGuess function - Tells the user what sound to pick.  Text in page.
    //**************************************************************************************** */
    renderSoundToGuess = () => {
        let soundSoundFile = ''
        switch (this.state.soundNameToGuess) {
            case 'Bark!':
                soundSoundFile = "../soundFiles/bark.wav"
                break;
            case 'Moooo!':
                soundSoundFile = "../soundFiles/moo.wav"
                break;
            case 'Quack!':
                soundSoundFile = "../soundFiles/quack.wav"
                break;
            case 'Growl!':
                soundSoundFile = "../soundFiles/growl.wav"
                break;
            case 'Meow!':
                soundSoundFile = "../soundFiles/meow.wav"
                break;
            default:
                soundSoundFile = ""
        }
        let saySound = new Audio(soundSoundFile)
        setTimeout(function () { saySound.play() }, 1500)
        return (
            <div>
                <div className="pulsate" onClick={this.handleClickedPulsatingSound} style={{ fontSize: 150 }}>{this.state.soundNameToGuess}</div>
            </div>
        )
    }

    //*************************************************************************************** */
    //handleClickedPulsatingSound function - audio file played when pulsating text is clicked
    //                                
    //**************************************************************************************** */
    handleClickedPulsatingSound = () => {

        let soundSoundFile = ''
        switch (this.state.soundNameToGuess) {
            case 'Bark!':
                soundSoundFile = "../soundFiles/bark.wav"
                break;
            case 'Moooo!':
                soundSoundFile = "../soundFiles/moo.wav"
                break;
            case 'Quack!':
                soundSoundFile = "../soundFiles/quack.wav"
                break;
            case 'Growl!':
                soundSoundFile = "../soundFiles/growl.wav"
                break;
            case 'Meow!':
                soundSoundFile = "../soundFiles/meow.wav"
                break;
            default:
                soundSoundFile = ""
        }
        let saySoundFile = new Audio(soundSoundFile)
        saySoundFile.play()
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
        let soundGameCorrect = `Correct: ${this.state.correctScore}`
        let soundGameWrong = `Incorrect: ${this.state.incorrectScore}`

        return (

            <div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h3>Sound Game Score</h3>
                    <h4 className="modalStatsCorrect">{soundGameCorrect}</h4>
                    <h4 className="modalStatsIncorrect">{soundGameWrong}</h4>

                    <h3 id="playAgainModalText">Play again?</h3>
                    <card col-6 id="soundPlayAgain" onClick={this.handleClickPlayAgain}><img src="https://i.pinimg.com/originals/f0/8b/99/f08b998f7548448a73134f4d21c4b5f3.gif" /></card>
                    <card col-6 id="soundNotPlayAgain" onClick={this.handleClickNotPlayAgain}><img src="https://www.smileysapp.com/gif-emoji/thumbs-down.gif" /></card>
                </Modal>
            </div>
        )
    }



    render() {
        const { open } = this.state;
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }

        return (

            <Fragment>
                <Navbar />
                <div id="soundGamePage">
                    <h1 id='soundGameName'> The Sound Game!</h1>
                    {/* <h1>{this.renderSoundToGuess()}</h1> */}
                    
                    <div className="container" id='sound-container'>
                        <div className="rowShapes">
                            {this.randomRender()}
                        </div>
                        <h1>{this.renderSoundToGuess()}</h1>
                    </div>

                    <h2 id='lefttogo'>{10 - this.state.questionNum} to go!</h2>

                </div>
                {this.modalPlayAgain()}
            </Fragment>
        )
    }
}
export default SoundGame;















