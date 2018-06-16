import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = props => {
  return (

    <Fragment>
      <nav className="nav-extended cyan">
        <div className="nav-wrapper">
          <Link className='nav-item nav-link grey' to='/Parents'>Parents Place</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link className='nav-item nav-link' to='/Home'>Home</Link></li>
            <li><Link className='nav-item nav-link' to='/Login'>Logout</Link></li>
            <li><Link className='nav-item nav-link' to='/about'>About</Link></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;