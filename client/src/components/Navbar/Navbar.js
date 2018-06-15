import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = props => {
  return (
    <Fragment>
      <div id='jumbo' classNameName='jumbotron'>
        <h1>Hi {props.username}, {props.message}</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">TimeOut</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul  className="navbar-nav">
            <li  className="nav-item active" >
              <Link id="nav-main" className='nav-item nav-link' to='/main'>Main</Link>
            </li>
            <li className="nav-item">
              <Link id="nav-main" className='nav-item nav-link' to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link id="nav-main" className='nav-item nav-link' to='/profile'>Profile</Link>
            </li>
            <li className="nav-item dropdown">
              <a  id="nav-main" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">classes</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/alphabet">Alphabet</Link>
                <Link className="dropdown-item" to="/numbers">Numbers</Link>
                <Link className="dropdown-item" to="/shapes">Shapes</Link>
                <Link className="dropdown-item" to="/colors">Colors</Link>
              </div>
            </li>
            <li className="nav-item">
              {/* can change login to logout button depending on user auth */}
              <Link className='nav-item nav-link' to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>

    </Fragment>
  )
}

export default Navbar;