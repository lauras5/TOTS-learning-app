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
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="card game" />
                            <span>Card Game</span>
                        </Link>
                        <Link id='colorgame' to='/games/colorgame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="color game" />
                            <span> Color Game</span>
                        </Link>
                        <Link id='numbergame' to='/games/numbergame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="number game" />
                            <span>Number Game</span>
                        </Link>
                        <Link id='shapegame' to='/games/shapegame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="shapes game" />
                            <span>Shape Game</span>
                        </Link>
                        <Link id='shapegame' to='/games/shapegame'>
                            <img src="http://25.io/smaller/img/smaller_256x256.png" alt="shapes game" />
                            <span>Shape Game</span>
                        </Link>
                    </Carousel>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Games;