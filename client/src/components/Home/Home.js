
import React, { Component, Fragment } from 'react';
import './Home.css';
import Games from '../Games'
import Footer from '../Footer'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Games />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;
