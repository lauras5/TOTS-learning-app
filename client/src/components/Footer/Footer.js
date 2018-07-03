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
                    <img id="monkey" className="right" src="../images/monkey.png" />

                        © Team Zulu 2018 T.O.T.S.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;