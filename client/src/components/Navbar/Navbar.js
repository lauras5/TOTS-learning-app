import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {

  // on click event for logout button
  // remove user from session
  logoutSession = event => {
    sessionStorage.removeItem('username')
  }

  render() {

    return (
      <Fragment>
        <button id='parentBtn'><Link to='/parents'>Parents Place</Link></button>
        <button onClick={this.logoutSession} id='logoutBtn' className='right'><Link to='/'>Logout</Link></button>
        <div className='logo'>

          <img id='loginSun' className="left" src="../images/sun.png" />
          <div className='logo'>
            <div id="rectangle">
              <div id='nav' className="navigation">
                <h1 id="appName">T.O.T.S.</h1>
                <p id='appS'>an app for your toddlers growing mind</p>
                <ul>
                  <li><Link id='homeLink' className='nav-item nav-link' to='/home'>Home</Link></li>
                  <li><Link id='aboutLink' className='nav-item nav-link' to='/about'>About</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}

export default Navbar;