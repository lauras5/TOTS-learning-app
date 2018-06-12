import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import AppRouter from './approuter'
import './App.css';

class App extends Component {
    // componentDidMount() {
    //     axios.post('/users', {
    //         name: 'Pablo',
    //         email: 'this@email.com'
    //     })

    //     .then(r => {
    //         console.log(r)
    //         axios.get('/users') 
    //         .then(r = {
    //             console.log(r)
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    //     })
    // }
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