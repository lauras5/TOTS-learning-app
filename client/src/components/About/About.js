import React, { Fragment } from 'react';
import './About.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div id="theTeam">
        <h2 id='aboutUs'>About Us</h2>
        <div id="indexGallery">

          <div className="team-image">
            <img className="lanceImg" src="../images/lance.png" alt="lance" />
            <p>Lance Lee</p>
          </div>

          <div className="team-image">
            <img className="lauraImg" src="../images/laura.jpg" alt="laura" />
            <p>Laura Salcido</p>
          </div>

          <div className="team-image">
            <img className="michaelImg" src="../images/michael.png" alt="michael" />
            <p>Michael Gamatero</p>
          </div>

          <div className="team-image">
            <img className="shazImg" src="../images/shaz.jpg" alt="shaz" />
            <p>Shaz Ifthikar</p>
          </div>

          <div className="team-image">
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