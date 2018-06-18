import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer cyan">
                <div className="container">
                    <div className="footer-copyright">
                        <div className="container">
                            © 2018 Team Final Project
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;