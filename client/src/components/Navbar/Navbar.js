import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = props => {
  return (

    <Fragment>
      <nav className="navigation_container">
        {/* <div className="l-triangle-top"></div>
        <div className="l-triangle-bottom"></div> */}

        <div className="rectangle">
          <div className="navigation">
            <Link className='nav-item nav-link' to='/parents'>Parents Place</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link className='nav-item nav-link' to='/home'>Home</Link></li>
              <li><Link className='nav-item nav-link' to='/login'>Logout</Link></li>
              <li><Link className='nav-item nav-link' to='/about'>About</Link></li>
            </ul>
          </div>
        </div>

        {/* <div className="r-triangle-top"></div>
        <div className="r-triangle-bottom"></div> */}
      </nav>
    </Fragment>
  )
}
{/* <div className="navigation_container">
 
 <!-- the left side of the fork effect -->
    <div class="l-triangle-top"></div>
    <div class="l-triangle-bottom"></div>
  
 <!-- the ribbon body -->
  
       <div class="rectangle">
  
 <!-- the navigation links -->
  
    <ul id="navigation">
       <li><a href="#">link 1</a></li>
       <li><a href="#">link 2</a></li>
       <li><a href="#">link 3</a></li>
       <li><a href="#">link 4</a></li>
    </ul>
  
 <!-- end the ribbon body -->
    </div>
  
 <!-- the right side of the fork effect -->
          <div class="r-triangle-top"></div>
          <div class="r-triangle-bottom"></div>
  
 <!-- end container -->
 </div>
 */}

export default Navbar;