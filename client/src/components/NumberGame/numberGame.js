import React, { Component, Fragment } from 'react';
import NumberQuestion from "./numberQuestion";
import NumberAnswer from "./numberAnswer";
import NumberQuestionList from "./number.json";
import Axios from 'axios';
import API from '../utils/API';


class NumberGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            correctCount: 0,
            incorrectCount: 0,
            correctAnswer: 1,
            questionIndex: 0,
            NumberQuestionList,
        }
    }

    componentDidMount() {
        this.loadNumberGame();
        this.newGame();
      }
    
      loadNumberGame = () => {
        API.getNumberGame()
          .then(res =>
            this.setState({ NumberQuestionList: res.data})
          )
          .catch(err => console.log(err));
      };


    newGame = () => {
        // shuffle cards
        this.setState({ correctCount: 0 })
        this.setState({ incorrectCount: 0 })
        this.setState({ correctAnswer: 0 })
        console.log('game has been reset')
    }

    // randomRender = () => {
    //     // this.setColorToGuess()  --  this messes it up???
    //     return (
    //         this.shuffle(this.state.color).map(colorFromArray =>
    //             <ColorCard key={colorFromArray.id} id={colorFromArray.id} image={colorFromArray.image} name={colorFromArray.name} handleClicked={this.handleClicked} />
    //         )
    //     )
    // }
    
    selectNextQuestionandAnswer = () => {
        return (
            this.shuffleArray(this.state.NumberQuestionList).map(questionElement =>
                <Fragment>
                    <NumberQuestion key={this.state.questionIndex} image={questionElement.questionImage} />
                </Fragment>
            )
        )
        this.state.questionIndex++
    }

    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log(array);
    }

    render() {

        return (
            <Fragment>
                <h1> Number Game </h1>
                {this.selectNextQuestionandAnswer()}
            </Fragment>
        )
    }
}

export default NumberGame; 