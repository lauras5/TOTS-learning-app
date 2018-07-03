import React, { Fragment } from 'react';
import './About.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="theTeam">
        <div className="about-us">About Us</div>

        <div className="bio"></div>

        <div id="index-gallery">
          <div className="team-image">
            {/* <img src="http://movingimages.files.wordpress.com/2009/10/earth-simulator-offers-peaks-into-our-planetary-future.jpg?w=780" alt=""/> */}
            <img className="lanceImg" src="../images/lance.png" alt="lance" />
            <p>Lance Lee</p>
          </div>

          <div className="team-image">
            {/* <img src="http://movingimages.files.wordpress.com/2009/10/earth-simulator-offers-peaks-into-our-planetary-future.jpg?w=780" alt=""/> */}
            <img className="lauraImg" src="../images/laura.jpg" alt="laura" />
            <p>Laura Salcido</p>
          </div>

          <div className="team-image">
            {/* <img src="http://movingimages.files.wordpress.com/2009/10/earth-simulator-offers-peaks-into-our-planetary-future.jpg?w=780" alt=""/> */}
            <img className="michaelImg" src="../images/michael.png" alt="michael" />
            <p>Michael Gamatero</p>
          </div>

          <div className="team-image">
            {/* <img src="http://movingimages.files.wordpress.com/2009/10/earth-simulator-offers-peaks-into-our-planetary-future.jpg?w=780" alt=""/> */}
            <img className="shazImg" src="../images/shaz.jpg" alt="shaz" />
            <p>Shaz Ifthikar</p>
          </div>

          <div className="team-image">
            {/* <img src="http://movingimages.files.wordpress.com/2009/10/earth-simulator-offers-peaks-into-our-planetary-future.jpg?w=780" alt=""/> */}
            <img className="alvinImg" src="../images/alvin.png" alt="alvin" />
            <p>Alvin Ayusa</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default About;