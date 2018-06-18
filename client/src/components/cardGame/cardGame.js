import React, { Component, Fragment } from 'react';
import cardList from '../../cards.json';
import './cardGame.css';


class Cards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            tempArr: [],
            correct: [],
            onChange : this.handleChange,
            time: ''
        }
    }

    turnCard = (event) => {
        const state = this.state
        state.counter = state.counter + 1
        state.tempArr.push(event.target.getAttribute('value'))
        this.setState({ turned: true })

        console.log(event.target.getAttribute('value'))
        console.log(state)
        console.log(state.tempArr)

        if (state.counter % 2 === 0) {
            if (state.tempArr[0] === state.tempArr[1]) {
                alert(`Great Job!`)
                state.correct.push(state.tempArr[0], state.tempArr[1])
                this.
                this.setState({ tempArr: [] })
                if (state.correct.length === 12) {
                    alert('Great job! You got them all right! Play again?')
                    //stop timer
                }
            } else {
                alert('not a match')
                this.setState({ tempArr: [] })
            }
            return
        }
    }

    newGame = () => {
        // shuffle cards
        this.setState({ counter: 0 })
        this.setState({ tempArr: [] })
        this.setState({ correct: [] })
        this.setState({ turned: false })
        console.log('game has been reset')
    }

    render() {

        return (
            <Fragment>
                <h1>Card Memory Game!</h1>
                <div className="row">
                    {cardList.map(card =>
                        <Fragment>
                            <div className='cardBorder col s3 m2' >
                                <div className='card-small waves-effect waves-light blue' onClick={this.turnCard} value={card.name} key={card.id} onChange='false'>
                                    <img id='cardImages' src={card.image} alt={card.name} />
                                    <h3>{card.name}</h3>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>

                <div><a id='shuffleBtn' className="waves-effect waves-light btn-large pink" onClick={this.newGame}>New Game!</a></div>

            </Fragment>
        )
    }
}

export default Cards;

