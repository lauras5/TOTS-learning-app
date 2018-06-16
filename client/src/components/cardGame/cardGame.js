import React, { Component, Fragment } from 'react';
import cardList from '../../cards.json';
import './cardGame.css';

cardList.map(card => {
    console.log(card)
})


class Cards extends Component {
    state = {
        turned : false
    }

    handleClickEvent(event) {
        this.turnCard = () => {
            this.setState({turned : true})
    
            cardVal = this.value
            console.log(cardVal)
        }
    }

    // if cards dont match, flip = false
    // if they match, flipped = true and highlight
    // score is timed
    // store times and get avg, low and high
    // add timer to app
    // timer starts when they make the first click, ends when all cards flipped = true

    render() {
        return (
            <Fragment>
                <h1>Card Memory Game!</h1>
                <div className="row">
                    {cardList.map(card =>
                        <Fragment>
                            <div className='col s3 m2' >
                                <div onClick={turnCard()} class='card-small waves-effect waves-light blue'>
                                    <img onClick={turnCard()}id='cardImages' value={card.id} src={card.image} alt={card.name} />
                                    <h3>{card.name}</h3>
                                </div>
                            </div>
                        </Fragment>
                    )
                    }
                </div>

                <a id='shuffleBtn'class="waves-effect waves-light btn-large">New Game</a>

            </Fragment>
        )
    }
}

export default Cards;