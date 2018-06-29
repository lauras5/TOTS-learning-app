import React, { Component, Fragment } from 'react';
import Footer from './components/Footer';
import AppRouter from './approuter'
// import GameRouter from './gamerouter'
import './App.css';
// import NumberCard from "./components/NumberCard";

//import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
    render() {
        return (

            <Fragment>
                <AppRouter />
                {/* <GameRouter/> */}
                <Footer />
            </Fragment>
        )
    }
}

export default App;