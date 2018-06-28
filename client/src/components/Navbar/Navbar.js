import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = props => {
  return (
    <Fragment>
      <nav className="navigation_container" id='navbarContainer'>
        <div className="rectangle">
          <div className="navigation">
            <Link id='parentLink' className='nav-item nav-link' to='/parents'>Parents Place</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link className='nav-item nav-link' to='/home'>Home</Link></li>
              <li><Link className='nav-item nav-link' to='/about'>About</Link></li>
              <li><Link className='nav-item nav-link' to='/login'>Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;