import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                {/* <footer className="page-footer"> */}
                {/* <div className="container">
                    <div className="row">
                            <p className="grey-text text-lighten-4">Some Text to explain what the app does blah blah blah</p>
                        
                       
                    </div>
                </div>  */}
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Team Final Project
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;