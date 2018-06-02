import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import AppRouter from './approuter'
import './App.css';

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