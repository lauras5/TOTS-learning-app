import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => {
  return (

     <Fragment>
       <div id="main-nav">
       <div className='logo'>
      {/* <img id='logo' src="http://www.paperhymebd.com/workimage/22_newsimg_Little-wonderl.jpg" /> */}
      <h1 className="appLogo">Little Wonders</h1>
      <h3 className="slogan">Learning Made Fun.</h3>
      
      </div>

      
<div id="nav-images">
      <img className="sun" src="../images/sun.png" />
      <img className="pink-butterfly" src="../images/pink-butterfly.png" />
      <img className="grass" src="../images/grass.png" />
      <img className="train" src="../images/train.png" />
      <img className="flower1" src="../images/flower1.png" />
      <img className="flower2" src="../images/flower2.png" />
      <img className="flower3" src="../images/flower3.png" />
      <img className="baseball" src="../images/baseball.png" />
      <img className="duck" src="../images/duck.png" />
      <img className="crayons" src="../images/crayons.png" />
      <img className="bear" src="../images/bear.png" />
      <img className="blue-butterfly" src="../images/blue-butterfly.png" />

      </div>


<nav className="navigation_container">
        <div className="l-triangle-top"></div>
        <div className="l-triangle-bottom"></div>

        <div className="rectangle">
          {/* <div className="navigation"> */}
            {/* <Link className='nav-item nav-link' to='/Parents'>Parents Place</Link> */}
            <ul className="right">
            <div className="nav-logo">
              <li><Link className='nav-item nav-link' id="home-link" to='/Home'>Home</Link></li>
              <li><Link className='nav-item nav-link' id="login-link" to='/Login'>Logout</Link></li>
              <li><Link className='nav-item nav-link' id="about-link" to='/About'>About</Link></li>
              <li><Link className='nav-item nav-link' id="parent-link" to='/Parents'>Parents</Link></li>
              {/* <li><Link className='nav-item nav-link' id="parent-link" to='/'></Link></li>
              <li><Link className='nav-item nav-link' id="parent-link" to='/'></Link></li>
              <li><Link className='nav-item nav-link' id="parent-link" to='/'></Link></li>
              <li><Link className='nav-item nav-link' id="parent-link" to='/'></Link></li> */}
              </div>
            </ul>
          {/* </div> */}

        </div>
         <div className="r-triangle-top"></div>
         <div className="r-triangle-bottom"></div> 
      </nav>
      </div>
    </Fragment>
  )
} 


export default Navbar;