import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-materialize'
import './Games.css';
import Navbar from '../Navbar'
import Footer from '../Footer'

class Games extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <div id='carouselDiv'>
                    <Carousel id='thisdiv'>
                        <Link id='cardgame' to='/games/cardgame' >
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="nature" />
                            <span>Card Game</span>
                        </Link>
                        <Link id='colorgame' to='/games/colorgame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="nature" />
                            <span> Color Game</span>
                        </Link>
                        <Link id='numbergame' to='/games/numbergame'>
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