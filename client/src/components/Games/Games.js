import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-materialize'
import './Games.css';

class Games extends Component {
    render() {
        return (
            <Fragment>
                <div id='carouselDiv'>
                    <Carousel id='thisdiv'>
                        <Link id='gameName' to='/games/cardgame' >
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="nature" />
                            <span>Card Game</span>
                        </Link>
                        <Link id='gameName' to='/games/colorgame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="nature" />
                            <span> Color Game</span>
                        </Link>
                        <Link id='gameName' to='/games/numbergame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="nature" />
                            <span>Number Game</span>
                        </Link>
                    </Carousel>
                </div>
            </Fragment>
        )
    }
}

export default Games;