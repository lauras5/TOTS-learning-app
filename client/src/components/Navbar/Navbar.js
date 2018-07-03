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
        <button id='parentBtn'><Link to='/Parents'>Parents Place</Link></button>
        <button onClick={this.logoutSession} id='logoutBtn' className='right'><Link to='/'>Logout</Link></button>
        <div className='logo'>
          {/* <img id='logo' src="http://www.paperhymebd.com/workimage/22_newsimg_Little-wonderl.jpg" /> */}


          <div id="nav-images">
            <img className="pink-butterfly" src="../images/pink-butterfly.png" />
            <img className="train" src="../images/train.png" />
            <img className="flower1" src="../images/flower1.png" />
            <img className="flower2" src="../images/flower2.png" />
            <img className="flower3" src="../images/flower3.png" />
            <img className="baseball" src="../images/baseball.png" />
            <img className="duck" src="../images/duck.png" />
            <img className="blue-butterfly" src="../images/blue-butterfly.png" />
            <img id='sun' src="../images/sun.png" />
          </div>

          <div className="rectangle">
            <div id='navSection' className="navigation">
              <h1 id="appLogo">T.O.T.S.</h1>
              <ul>
                <li><Link className='nav-item nav-link' to='/home'>Home</Link></li>
                <li><Link className='nav-item nav-link' to='/about'>About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Navbar;