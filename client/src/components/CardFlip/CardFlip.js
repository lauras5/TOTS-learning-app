import React, { Fragment, Component } from 'react';
import API from '../../utils/API';
import { Card } from 'react-materialize'
import Navbar from '../Navbar';
import Footer from '../Footer';

class CardFlip extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Card>Hello</Card>
                <Footer />
            </Fragment>
        )
    }
}

export default CardFlip;