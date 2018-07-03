import React, { Component, Fragment } from 'react';
import './Parents.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'
import Navbar from '../Navbar'
import Footer from '../Footer'

class Parent extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="empty"> </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Parent;