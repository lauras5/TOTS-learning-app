import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize'
import './Home.css';
import ReactDOM from 'react-dom';
// import Carousel from '../Carousel';
import GameRouter from '../../gamerouter'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <GameRouter />
            </Fragment >
        )
    }
}

export default Home;