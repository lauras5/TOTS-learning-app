import React, { Component, Fragment } from 'react';
import './shapeGame.css';
import shape from "./shape.json";
import shapeToDrag from "./shapeToDrag.json";
import ShapeCard from "./shapeCard";
import API from '../../utils/API';
import ShapeToDragCard from "./shapeToDragCard";
import Modal from 'react-responsive-modal';
import { Redirect } from 'react-router'
import Navbar from '../Navbar';
import Footer from '../Footer';

class ShapeGame extends Component {
    state = {
        correctScore: 0,
        incorrectScore: 0,
        questionNum: 0,  //tracks how many questions are asked so far
        shapeNameToGuess: { id: 1, image: "../images/baseball.png", name: "Circle" },  //set to 'Red' initially.....i can't get a randomized initial value here!!!
        shape, //hold shapes to drag to - an exact copy of shape.json
        shapeToDrag, //hold shapes to drag - an exact copy of shapeToDrag.json
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


    //************************************************************************************* */
    //randomRender Function = renders tiles to the page.  Renders in randomized fashion.
    //      Other functions used:  shuffle()
    //*************************************************************************************** */
    randomRender = () => {


        return (
            this.shuffle(this.state.shape).map(shapeFromShapeArray =>
                <div className="card col-s2 shapeCardIndividual" key={shapeFromShapeArray.id} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}>
                    <div className="card-title">{shapeFromShapeArray.name}</div>
                    <div className="img-container">
                        <img
                            alt={shapeFromShapeArray.name}
                            src={shapeFromShapeArray.image}
                        />
                    </div>
                </div>)
        )
    }

    //shuffle Function = Fisher-Yates Shuffle, shuffles array contents.
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

    //reinitialize Function = sets the state variables score and incorrectScore to 0 
    //This function also rerenders the tiles in randomized fashion
    //      Other functions used:  randomRender()
    reinitialize = () => {
        this.setState({ correctScore: 0 })
        this.setState({ incorrectScore: 0 })
        this.randomRender()
    }

    postUserScoreToProfile = (currentUserName) => {
        const user = this.state.currentUser
        const shapeGame = user.shapeGame

        const shapeGameObj = {
            timesPlayed: shapeGame.timesPlayed,
            correctCount: shapeGame.correctCount,
            incorrectCount: shapeGame.incorrectCount
        }

        // Add scores and times played
        shapeGameObj.timesPlayed++
        shapeGameObj.correctCount += this.state.correctScore
        shapeGameObj.incorrectCount += this.state.incorrectScore

        // Update Number Game User with 
        API.updateShapeGameUser(currentUserName, shapeGameObj)
    };



    //handleClickedPlayAgain function - handles click event to play again from Modal. 
    //                                - resets game values to 0 and restarts game
    handleClickPlayAgain = () => {
        let againSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/laugh-12.wav")
        againSound.play()

        const currentUserName = sessionStorage.getItem('username')
        this.postUserScoreToProfile(currentUserName)
        this.setState({ correctScore: 0, incorrectScore: 0, questionNum: 0, shapeNameToGuess: 'Blue' })
        this.pickRandomShapeToDrag()
        this.renderShapeToDrag()
        this.loadCurrentUser(currentUserName) // hacky way to get user information again
        this.onCloseModal()
    }

    //handleClickedNotPlayAgain function - handles click event to NOT play again from Modal. 
    //                                   - exits shapeGame and goes back to home
    handleClickNotPlayAgain = () => {
        let click = new Audio("http://www.pacdv.com/sounds/domestic_sound_effects/door-close-1.wav")
        click.play()

        const currentUserName = sessionStorage.getItem('username')
        this.postUserScoreToProfile(currentUserName) // hacky way to get user information again
        this.loadCurrentUser(currentUserName)
        this.onCloseModal()
        this.setState({ toHome: true })
    }

    //pickRandomShapeToDrag function - Gets random shape to drag.  Assigns this so state property shapeNameToGuess
    pickRandomShapeToDrag = () => {

        let dragShapeToRender = this.state.shapeToDrag[Math.floor(Math.random() * 4)]
        this.setState({ shapeNameToGuess: { id: dragShapeToRender.id, image: dragShapeToRender.image, name: dragShapeToRender.name } })
    }
    
    //renderShapetoGuess function - Tells the user what shape to pick.  Text in page.
    renderShapeToDrag = () => {
        
        return (
            <div>
            <div className="pulsate">{<ShapeToDragCard key={this.state.shapeNameToGuess.id} id={this.state.shapeNameToGuess.id} image={this.state.shapeNameToGuess.image} draggable />}</div>
            </div>
        )
    }
    
    
    //onDrag event (currently empty)
    onDragOver = (ev) => {
        ev.preventDefault()
    }
    
    //onDrop event - when dragged object is dropped to target, sets off game decision logic
    //               if action is correct or incorrect.  This writes to the state for the scores.
    //               Modals are opened in this module when max number of questions are reached.
    //                  Other functions used:  pickRandomShapeTodDrag(), renderShapeToDrag(),
    //                                         onOpenModal(), modalPlayAgain()
    
    onDrop = (ev) => {
        ev.preventDefault()
        
        let correctSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/yes_1.wav")
        let incorrectSound = new Audio("http://www.pacdv.com/sounds/fart-sounds/fart-wav-4.wav")
        
        this.setState({ questionNum: this.state.questionNum + 1 })
        
        if (this.state.shapeNameToGuess.name === ev.target.alt) {
            console.log(`Source is ${this.state.shapeNameToGuess.name}` )
            console.log(`Target is ${ev.target.alt}` )
            correctSound.play()
            this.setState({ correctScore: this.state.correctScore + 1 })
        }
        else {
            console.log(`Source is ${this.state.shapeNameToGuess}` )
            console.log(`Target is ${ev.target.alt}` )
            incorrectSound.play()
            this.setState({ incorrectScore: this.state.incorrectScore + 1 })
        }

        this.pickRandomShapeToDrag()
        this.renderShapeToDrag()

        if (this.state.questionNum > 3) {

            //WRITE RESULTS TO DB HERE

            let thud = new Audio("http://www.pacdv.com/sounds/domestic_sound_effects/door-close-1.wav")
            thud.play()
            { this.onOpenModal() }
            { this.modalPlayAgain() }
        }
    }

    //Modal open and close functions
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    //Modal render - render the modal
    modalPlayAgain = () => {
        // {this.onOpenModal()}
        let shapeGameCorrect = `Correct: ${this.state.correctScore}`
        let shapeGameWrong = `Incorrect: ${this.state.incorrectScore}`

        return (

            <div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h3>Shape Game Score</h3>
                    <h4 className="modalStatsCorrect">{shapeGameCorrect}</h4>
                    <h4 className="modalStatsIncorrect">{shapeGameWrong}</h4>

                    <h3 id="playAgainModalText">Play again?</h3>
                    <card col-6 id="shapePlayAgain" onClick={this.handleClickPlayAgain}><img src="https://i.pinimg.com/originals/f0/8b/99/f08b998f7548448a73134f4d21c4b5f3.gif" /></card>
                    <card col-6 id="shapeNotPlayAgain" onClick={this.handleClickNotPlayAgain}><img src="https://www.smileysapp.com/gif-emoji/thumbs-down.gif" /></card>
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
                <div id="shapeGamePage">
                    <h2 id='shapeGameName'> The Shape Game!</h2>
                    <h2 id='instructions'>Drag the piece to the correct shape!</h2>
                    
                    <div className="container" id='shape-container'>

                        <div className="rowShapes">
                            {this.randomRender()}
                        </div>
                    </div>

                    <h2>{this.renderShapeToDrag()}</h2>
                    <h2 id='lefttogo'>{5 - this.state.questionNum} to go!</h2>

                </div>
                {this.modalPlayAgain()}
                <Footer />
            </Fragment>
        )
    }
}

export default ShapeGame;















