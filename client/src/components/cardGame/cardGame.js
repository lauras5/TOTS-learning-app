import React, { Component, Fragment } from 'react';
import cardList from '../../cards.json';
import './cardGame.css';

// cardList.map(card => {
//     console.log(card)
// })


class Cards extends Component {

    // constructor(props) {
    // }
    // super(props)
    state = {
        turned: false,
        counter: 0
    }
    // if cards dont match, flip = false
    // if they match, flipped = true and highlight
    // score is timed
    // store times and get avg, low and high
    // add timer to app
    // timer starts when they make the first click, ends when all cards flipped = true

    

    turnCard = (event) => {
        console.log(event.target.getAttribute('value'))
        console.log('hello')
        this.setState({ turned: true })
        // add clicks, limit 2
        
    }

    cardsClicked = () => {
        // counter max is 2
        // if 2 cards are clicked, check to see if they are the same value, if they are keep them turned, if not, turn them back. 
    }
    
    newGame = () => {
        // set state of all cards to false
        // shuffle cards
        this.setState({ turned: false })
        console.log('reset game')
    }

    render() {
        return (
            <Fragment>
                <h1>Card Memory Game!</h1>
                <div className="row">
                    {cardList.map(card =>
                        <Fragment>
                            <div className='col s3 m2' >
                                <div class='card-small waves-effect waves-light blue' onClick={this.turnCard} value={card.name}>
                                    <img id='cardImages' src={card.image} alt={card.name} />
                                    <h3>{card.name}</h3>
                                </div>
                            </div>
                        </Fragment>
                    )
                    }
                </div>

                <a id='shuffleBtn' class="waves-effect waves-light btn-large" onClick={this.newGame}>New Game!</a>

            </Fragment>
        )
    }
}

export default Cards;

