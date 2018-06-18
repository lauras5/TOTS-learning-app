import React, { Component, Fragment } from 'react';
import cardList from '../../cards.json';
import './cardGame.css';


class Cards extends Component {

    // constructor(props) {
    //     super(props)
    // }
    state = {
        counter : 0,
        tempArr : [],
        correct : [],
        time : ''
    }

    turnCard = (event) => {
        this.state.counter = this.state.counter + 1
        this.state.tempArr.push(event.target.getAttribute('value'))

        console.log(event.target.getAttribute('value'))
        console.log(this.state)
        console.log(this.state.tempArr)

        if (this.state.counter % 2 === 0) {
            if(this.state.tempArr[0] === this.state.tempArr[1]) {
                alert(`Great Job!`)
                this.state.correct.push(this.state.tempArr)
                this.setState({tempArr: []})
            } else {
                alert('not a match')
                this.setState({tempArr: []})
            }
            return
        }
    }

    newGame = () => {
        // shuffle cards
        this.setState({counter: 0})
        this.setState({tempArr: []})
        this.setState({correct: []})
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

