import React, { Component, Fragment } from 'react';
import API from '../../utils/API';
import './numberGameStyles.css';
import Modal from 'react-responsive-modal';
import { Redirect } from 'react-router'
import Navbar from '../Navbar'
import Footer from '../Footer'

class NumberGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            correctCount: 0,
            incorrectCount: 0,
            correctAnswer: 0,
            numberQuestionList: [],
            topQuestion: "",
            topQuestionImage: "",
            topQuestionChoices: [],
            openModal: false,
            currentUser: {},
            toHome: false
        }
    };

    // If component successfully mounts, start new game
    componentDidMount() {
        this.loadNumberGame()
        const currentUserName = sessionStorage.getItem('username')
        this.loadCurrentUser(currentUserName)
    };

    // GET number game questions from database and SET all initial values 
    loadNumberGame = () => {
        API.getNumberGame()
            .then(res => {
                this.shuffleArray(res.data)
                this.setState({ correctCount: 0, incorrectCount: 0, correctAnswer: 0 })
                this.selectTopQuestionFromNumberQuestionList()
                this.getSetChoicesFromTopQuestion()
            })
            .catch(err => console.log(err));
    };

    // GET current user based off of user stored in session data
    loadCurrentUser = (currentUserName) => {
        API.getCurrentUser(currentUserName)
            .then(res => {
                // if user is null, handle it: perhaps route to login page
                this.setState({ currentUser: res.data })
            })
    };

    // PUT method to update number game score to user in DB
    postUserScoreToProfile = (currentUserName) => {
        const user = this.state.currentUser
        const numberGame = user.numberGame

        const numberGameObj = {
            timesPlayed: numberGame.timesPlayed,
            correctCount: numberGame.correctCount,
            incorrectCount: numberGame.incorrectCount
        }

        // Add scores and times played
        numberGameObj.timesPlayed++
        numberGameObj.correctCount += this.state.correctCount
        numberGameObj.incorrectCount += this.state.incorrectCount

        // Update Number Game User with 
        API.updateNumberGameUser(currentUserName, numberGameObj)
    };


    //  Select the top Question from NumberQuestionList
    selectTopQuestionFromNumberQuestionList = () => {
        this.setState({ topQuestion: this.state.numberQuestionList[0] })
        this.setState({ topQuestionImage: this.state.numberQuestionList[0].questionImage })
    };

    //   Get and set choices from the Top Question 
    getSetChoicesFromTopQuestion = () => {
        this.setState({ topQuestionChoices: this.state.numberQuestionList[0].choices })
    };

    // shuffle list from db to randomize order
    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({ numberQuestionList: array })
        console.log('Array has been successfully shuffled')
    };

    // Updates scores/stats on page
    updateScore = answerChoice => {

        let correctSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/yes_1.wav")
        let wrongSound = new Audio("http://www.pacdv.com/sounds/fart-sounds/fart-wav-4.wav")
        
        if (parseInt(answerChoice) === parseInt(this.state.topQuestionChoices[this.state.topQuestion.correctAnswerIndex])) {
            correctSound.play()
            this.state.correctCount++
        } else {
            wrongSound.play()
            this.state.incorrectCount++
        };
    };

    // handles answer selection from user
    handleClick = answerChoice => {
        this.updateScore(answerChoice)
        
        // Pop first question from numberQuestionList
        this.state.numberQuestionList.splice(0, 1)
        // console.log('popped: ' + JSON.stringify(this.state.numberQuestionList))
        
        if (this.state.numberQuestionList.length === 0) {
            // create this method with POST?

            let thud = new Audio("http://www.pacdv.com/sounds/domestic_sound_effects/door-close-1.wav")
            thud.play()
            this.onOpenModal()

            // Replay?
        } else {
            // If not game over, choose next question and answers
            this.selectTopQuestionFromNumberQuestionList()
            this.getSetChoicesFromTopQuestion()
        }

    };

    // Handles game reset / post 
    handleClickPlayAgain = () => {
        const currentUserName = sessionStorage.getItem('username')
        this.postUserScoreToProfile(currentUserName)
        this.loadNumberGame()
        this.loadCurrentUser(currentUserName)
        this.onCloseModal()

        let againSound = new Audio("http://www.pacdv.com/sounds/people_sound_effects/laugh-12.wav")
        againSound.play()
    }

    // Handles game save and redirect to Hom
    handleClickNotPlayAgain = () => {
        const currentUserName = sessionStorage.getItem('username')
        this.postUserScoreToProfile(currentUserName)
        this.onCloseModal()
        this.setState({ toHome: true })
        let click = new Audio("http://www.pacdv.com/sounds/domestic_sound_effects/door-close-1.wav")
        click.play()
    }

    // Open modal
    onOpenModal = () => {
        this.setState({ openModal: true });
    };

    // Close modal
    onCloseModal = () => {
        this.setState({ openModal: false });
    };


    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            // <img src='http://placehold.it/150' className="numberGameImage" />
            <Fragment>
                <Navbar />
                <h1 id='numGameName'> Number Game </h1>
                <div className="container">

                    <div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
                            <h3>Number Game Score</h3>
                            <h4 className="modalStatsCorrect">Correct Answers: {this.state.correctCount}</h4>
                            <h4 className="modalStatsIncorrect">Incorrect Answers: {this.state.incorrectCount}</h4>

                            <h3 id="playAgainModalText">Play again?</h3>
                            <card col-6 id="shapePlayAgain" onClick={this.handleClickPlayAgain}><img src="https://i.pinimg.com/originals/f0/8b/99/f08b998f7548448a73134f4d21c4b5f3.gif" /></card>
                            <card col-6 id="shapeNotPlayAgain" onClick={this.handleClickNotPlayAgain}><img src="https://www.smileysapp.com/gif-emoji/thumbs-down.gif" /></card>
                        </Modal>
                    </div>

                    <img src={this.state.topQuestionImage} className="numberGameImage" />
                    <br></br>
                    <div id='choiceBtns'>
                        <button id='buttonOne' className="waves-effect waves-light btn numberGameBtn" buttonid="btn-1" data-answerchoice={this.state.topQuestionChoices[0]} onClick={() => this.handleClick(this.state.topQuestionChoices[0])}>{this.state.topQuestionChoices[0]}</button>
                        <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-2" data-answerchoice={this.state.topQuestionChoices[1]} onClick={() => this.handleClick(this.state.topQuestionChoices[1])}>{this.state.topQuestionChoices[1]}</button>
                        <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-3" data-answerchoice={this.state.topQuestionChoices[2]} onClick={() => this.handleClick(this.state.topQuestionChoices[2])}>{this.state.topQuestionChoices[2]}</button>
                        <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-4" data-answerchoice={this.state.topQuestionChoices[3]} onClick={() => this.handleClick(this.state.topQuestionChoices[3])}>{this.state.topQuestionChoices[3]}</button>
                    </div>

                    <h4 id='rightPage'>Right: {this.state.correctCount}</h4>
                    
                    <h4 id='bottomPage'>Wrong: {this.state.incorrectCount}</h4>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default NumberGame; 