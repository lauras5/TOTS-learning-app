import React, { Component, Fragment } from 'react';
import API from '../../utils/API';
import './numberGameStyles.css';


class NumberGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            correctCount: 0,
            incorrectCount: 0,
            correctAnswer: 0,
            numberQuestionList: [],
            topQuestion: "",
            topQuestionChoices: []
        }
    };

    // If component successfully mounts, start new game
    componentDidMount() {
        this.loadNumberGame()
    };
    
    // GET number game questions from database and SET all initial values 
    loadNumberGame = () => {
        API.getNumberGame()
          .then ( res => {
            this.shuffleArray(res.data)
            this.setState({ correctCount: 0, incorrectCount: 0, correctAnswer: 0})
            this.selectTopQuestionFromNumberQuestionList()
            this.getSetChoicesFromTopQuestion()
          }).then ( () => {
            
          })
          .catch(err => console.log(err));
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

    // handles answer selection from user
    handleClick = answerChoice => {
        
        if(parseInt(answerChoice) === parseInt(this.state.topQuestionChoices[this.state.topQuestion.correctAnswerIndex])) {
            this.state.correctAnswer++
        } else {
            this.state.incorrectAnswer++
        };
        // console.log('clicked: ' + answerChoice)
        // console.log('List: ' + JSON.stringify(this.state.numberQuestionList))
        // console.log('TopQuestion: ' + JSON.stringify(this.state.topQuestion))
        // console.log('Choice1: ' + this.state.topQuestionChoices[0])
        // console.log('Choice2: ' + this.state.topQuestionChoices[1])
        // console.log('Choice3: ' + this.state.topQuestionChoices[2])
        // console.log('Choice4: ' + this.state.topQuestionChoices[3])

        // Pop first question from numberQuestionList
        this.state.numberQuestionList.splice(0,1)
        console.log('popped: ' + JSON.stringify(this.state.numberQuestionList))
        
        if (this.state.numberQuestionList.length === 0){
            this.saveGameStats()
            // Replay?
        };

        // If not game over, choose next question and answers
        this.selectTopQuestionFromNumberQuestionList()
        this.getSetChoicesFromTopQuestion()
    };
    
    
    render() {

        return (
            <Fragment>
                <h1> Number Game </h1>
                <div className="container">

                    <div id="modal1" class="modal">
                        <div class="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>

                    <img src='http://placehold.it/150' className="numberGameImage"/>
                    <br></br>
                    <form action="POST">
                        <button className="waves-effect waves-light btn numberGameBtn" buttonId="btn-1" data-answerChoice={this.state.topQuestionChoices[0]} onClick={() => this.handleClick(this.state.topQuestionChoices[0])}>{this.state.topQuestionChoices[0]}</button>
                        <button className="waves-effect waves-light btn numberGameBtn" buttonId="btn-2" data-answerChoice={this.state.topQuestionChoices[1]} onClick={() => this.handleClick(this.state.topQuestionChoices[1])}>{this.state.topQuestionChoices[1]}</button>
                        <button className="waves-effect waves-light btn numberGameBtn" buttonId="btn-3" data-answerChoice={this.state.topQuestionChoices[2]} onClick={() => this.handleClick(this.state.topQuestionChoices[2])}>{this.state.topQuestionChoices[2]}</button>
                        <button className="waves-effect waves-light btn numberGameBtn" buttonId="btn-4" data-answerChoice={this.state.topQuestionChoices[3]} onClick={() => this.handleClick(this.state.topQuestionChoices[3])}>{this.state.topQuestionChoices[3]}</button>
                    </form>
                </div>

            </Fragment>
        )
    }
}

export default NumberGame; 