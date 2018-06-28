import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

/* width="250" height="350"
 */
const Navbar = props => {
  return (

    <Fragment>
      <div className='logo'>
        {/* <img id='logo' src="http://www.paperhymebd.com/workimage/22_newsimg_Little-wonderl.jpg" /> */}
        <h1 className="appLogo">Little Wonders</h1>
        <h3 className="slogan">Learning Made Fun.</h3>

      </div>

      <img className="sun" src="https://publicdomainvectors.org/tn_img/nicubunu_Weather_Symbols_Sun.png" />
      <img className="pink-butterfly" src="https://publicdomainvectors.org/photos/jonata-Butterfly.png" />
      <img className="grass" src="https://publicdomainvectors.org/photos/grass4.png" />
      <img className="train" src="https://publicdomainvectors.org/photos/jean_victor_balin_locotoy.png" />
      <img className="flower1" src="https://publicdomainvectors.org/photos/mcol_flower.png" />
      <img className="flower2" src="https://publicdomainvectors.org/photos/mcol_flower.png" />
      <img className="flower3" src="https://publicdomainvectors.org/photos/mcol_flower.png" />
      <img className="baseball" src="https://publicdomainvectors.org/photos/Gerald_G_Baseball.png" />
      <img className="duck" src="https://publicdomainvectors.org/photos/Rubber_Duck.png" />
      <img className="crayons" src="https://publicdomainvectors.org/photos/Crayons.png" />
      {/*  <img className="books" src="https://publicdomainvectors.org/photos/Buecher-coloured.png" /> */}
      {/* <img className="car" src="https://publicdomainvectors.org/tn_img/vochito.png" /> */}
      <img className="bear" src="https://publicdomainvectors.org/photos/1464255207.png" />
      <img className="blue-butterfly" src="https://publicdomainvectors.org/photos/cartoon-butterfly-cv4.png" />

      <nav className="navigation_container">


        <div className="rectangle">
          <div className="navigation">
            <Link className='nav-item nav-link' to='/parents'>Parents Place</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link className='nav-item nav-link' to='/home'>Home</Link></li>
              <li><Link className='nav-item nav-link' to='/login'>Logout</Link></li>
              <li><Link className='nav-item nav-link' to='/about'>About</Link></li>
              <li><Link className='nav-item nav-link' to='/games/cardgame'>cardgame</Link></li>
              <li><Link className='nav-item nav-link' to='/games/numbergame'>numbergame</Link></li>
              <li><Link className='nav-item nav-link' to='/games/colorgame'>colorgame</Link></li>
              <li><Link className='nav-item nav-link' to='/games/shapegame'>shapegame</Link></li>
            </ul>
          </div>
        </div>

      </nav>
    </Fragment>
  )
}



export default Navbar;