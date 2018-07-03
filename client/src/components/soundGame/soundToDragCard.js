import React from 'react'
import "./soundToDragCard.css";

const SoundToDragCard = props => (
  <div className="card col soundToDragCardIndividual">
  
    <div className="img-container" name={props.name}>
      <img
        alt={props.name}
        src={props.image}
      />
      </div>
  </div>
);

export default SoundToDragCard;