import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Cards from './components/cardGame';
import ColorGame from './components/colorGame';
import NumberGame from './components/NumberGame';


const GameRouter = () => {
    return (
        <Fragment>
            <Games />
            <Route path='/games/colorgame' component={ColorGame} />
            <Route path='/games/cardgame' component={Cards} />
            <Route path='/games/numbergame' component={NumberGame} />
        </Fragment>
    )
};

export default GameRouter;