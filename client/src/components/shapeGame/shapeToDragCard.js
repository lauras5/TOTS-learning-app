import React from 'react'
import "./shapeToDragCard.css";

const ShapeToDragCard = props => (
  <div className="card col shapeToDragCardIndividual">
  
    <div className="img-container" name={props.name}>
      <img
        alt={props.name}
        src={props.image}
      />
      </div>
  </div>
);

export default ShapeToDragCard;