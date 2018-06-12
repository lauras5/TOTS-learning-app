import React from 'react';
import './Header.css';

const Header = props => {
    return(
        <div id='jumbo' className='jumbotron'>
            <h1>Hi {props.username}, Welcome back to App Name!</h1>
        </div>
    )
};

export default Header;