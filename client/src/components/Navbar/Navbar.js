import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => {
  return (

    <Fragment>
      <Link id='parentLink' className='nav-item nav-link' to='/Parents'>Parents Place</Link>
      
      <div id='navContainer' className="rectangle">
        <div className='navigation'>
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
          <div className='logo'>
            {/* <img id='logo' src="http://www.paperhymebd.com/workimage/22_newsimg_Little-wonderl.jpg" /> */}
            <h1 id='appLogo' className="brand-logo">Little Wonders</h1>
            {/* <h3 className="slogan">Learning Made Fun.</h3> */}
          </div>
          
          <ul>
            <li><Link className='nav-item nav-link' to='/Home'>Home</Link></li>
            <li><Link className='nav-item nav-link' to='/Login'>Logout</Link></li>
            <li><Link className='nav-item nav-link' to='/About'>About</Link></li>
          </ul>
        </div>
      </div>

    </Fragment >
  )
}


export default Navbar;