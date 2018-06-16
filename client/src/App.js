import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRouter from './approuter'
import './App.css';
//import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
    render() {
        return (


            <Fragment>
                <Navbar />
                <AppRouter />
                <Footer />
            </Fragment>
        )
    }
}

export default App;