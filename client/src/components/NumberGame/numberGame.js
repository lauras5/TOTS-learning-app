import React, { Component, Fragment } from 'react';
import API from '../../utils/API';
import './numberGameStyles.css';
import Modal from 'react-responsive-modal';

class NumberGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            correctCount: 0,
            incorrectCount: 0,
            correctAnswer: 0,
            numberQuestionList: [],
            topQuestion: "",
            topQuestionChoices: [],
            openModal: false,
            currentUser: {}
        }
    };

    // If component successfully mounts, start new game
    componentDidMount() {
        this.loadNumberGame()
        this.loadCurrentUser()
    };
    
    // GET number game questions from database and SET all initial values 
    loadNumberGame = () => {
        API.getNumberGame()
          .then ( res => {
            this.shuffleArray(res.data)
            this.setState({ correctCount: 0, incorrectCount: 0, correctAnswer: 0})
            this.selectTopQuestionFromNumberQuestionList(
            this.getSetChoicesFromTopQuestion()
          })
          .catch(err => console.log(err));
    };

    loadCurrentUser = () => {
        API.getUsers()
          .then ( res => {
              this.setState({ currentUser: res.data[0]})
              console.log(this.state.currentUser)
          })
    };

    //  Select the top Question from NumberQuestionList
    selectTopQuestionFromNumberQuestionList = () => {
        this.setState({ topQuestion: this.state.numberQuestionList[0] })
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
        this.setState({ numberQuestionList: array})
        console.log('Array has been successfully shuffled')
    };

    // Updates scores/stats on page
    updateScore = answerChoice => {
        if(parseInt(answerChoice) === parseInt(this.state.topQuestionChoices[this.state.topQuestion.correctAnswerIndex])) {
            this.state.correctCount++
        } else {
            this.state.incorrectCount++
        };
    };

    // handles answer selection from user
    handleClick = answerChoice => {
        this.updateScore(answerChoice)

        // Pop first question from numberQuestionList
        this.state.numberQuestionList.splice(0,1)
        // console.log('popped: ' + JSON.stringify(this.state.numberQuestionList))
        
        if (this.state.numberQuestionList.length === 0){
            // create this method with POST?
            this.onOpenModal()

            // Replay?
        } else {
            // If not game over, choose next question and answers
            this.selectTopQuestionFromNumberQuestionList()
            this.getSetChoicesFromTopQuestion()
        }

    };
    
    // Handles game reset / post / 
    handlePlayAgain = () => {
        // HANDLE POST HERE
        this.loadNumberGame()
        this.onCloseModal()
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

        return (
            <Fragment>
                <h1> Number Game </h1>
                <div className="container">

                    <div>
                        <Modal open = {this.state.openModal} onClose={this.onCloseModal} center>
                        <h3>Number Game Score</h3>
                        <h4 className= "modalStatsCorrect">Correct Answers: {this.state.correctCount}</h4>  
                        <h4 className = "modalStatsIncorrect">Incorrect Answers: {this.state.incorrectCount}</h4> 
                        
                        <button id="numberGamePlayAgain" onClick={this.handlePlayAgain}>Play Again?</button>
                        <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/59/93/T-T-12951-Multicoloured-Polka-Dot-Display-Numbers.jpg" />
                        </Modal>
                    </div>

                    <img src='http://placehold.it/150' className="numberGameImage"/>
                    <br></br>
                    <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-1" data-answerchoice={this.state.topQuestionChoices[0]} onClick={() => this.handleClick(this.state.topQuestionChoices[0])}>{this.state.topQuestionChoices[0]}</button>
                    <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-2" data-answerchoice={this.state.topQuestionChoices[1]} onClick={() => this.handleClick(this.state.topQuestionChoices[1])}>{this.state.topQuestionChoices[1]}</button>
                    <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-3" data-answerchoice={this.state.topQuestionChoices[2]} onClick={() => this.handleClick(this.state.topQuestionChoices[2])}>{this.state.topQuestionChoices[2]}</button>
                    <button className="waves-effect waves-light btn numberGameBtn" buttonid="btn-4" data-answerchoice={this.state.topQuestionChoices[3]} onClick={() => this.handleClick(this.state.topQuestionChoices[3])}>{this.state.topQuestionChoices[3]}</button>
                    
                    <h3>Statistics</h3>
                    <h4>Correct Answers: {this.state.correctCount}</h4>
                    <h4>Incorrect Answers: {this.state.incorrectCount}</h4>
                </div>

            </Fragment>
        )
    }
}

export default NumberGame; 