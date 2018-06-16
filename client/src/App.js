import React, { Component, Fragment } from 'react';
import Footer from './components/Footer';
import AppRouter from './approuter'
import './App.css';
//import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
    render() {
        return (

            <Fragment>
                <AppRouter />
                <Footer />
            </Fragment>
        )
    }
}

export default App;