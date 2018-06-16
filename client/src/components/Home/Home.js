import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'
import './Home.css';

const Home = () => {
    return (
        <Fragment>

            <ul>
                <li><Link className='nav-item nav-link' to='/cardGame'><p>Memory Game</p></Link></li>

                {/* <li><Link className='nav-item nav-link' to='/numbersGame'>Numbers Game</Link></li> */}
                {/* <li><Link className='nav-item nav-link' to='/shapesGame'>Shapes Game</Link></li> */}
                {/* <li><Link className='nav-item nav-link' to='/alphabetGame'>Alphabet Game</Link></li> */}
            </ul>
        </Fragment>
    )
}

export default Home;
