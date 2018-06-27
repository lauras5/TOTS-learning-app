import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cards from './components/cardGame';
import Carousel from './components/Carousel';
import ColorGame from './components/colorGame/colorGame';
import NumberGame from './components/NumberGame/numberGame';


const GameRouter = () => {
    return (
        <Fragment>
            <Carousel />
            <Route path='/games/colorgame' component={ColorGame} />
            <Route path='/games/cardgame' component={Cards} />
            <Route path='/games/numbergame' component={NumberGame} />
        </Fragment>
    )
};

export default GameRouter;