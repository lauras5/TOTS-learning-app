import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-materialize'
import ReactDOM from 'react-dom'
import './Games.css';



class Games extends Component {
    render() {
        return (
            <Fragment>
                <Carousel id='carouselDiv'>
                    <Link to='/games/cardgame'>
                        <img src="https://lorempixel.com/250/250/nature/1" alt="nature" />
                        <span>Card Game</span>
                    </Link>
                    <Link to='/games/colorgame'>
                        <img src="https://lorempixel.com/250/250/nature/1" alt="nature" />
                        <span> Game</span>
                    </Link>
                    <Link to='/games/numbergame'>
                        <img src="https://lorempixel.com/250/250/nature/1" alt="nature" />
                        <span>Card Game</span>
                    </Link>
                </Carousel>
            </Fragment>
        )
    }
}

export default Games;