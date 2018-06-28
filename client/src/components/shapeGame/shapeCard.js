import React from 'react'
import "./shapeCard.css";

const ShapeCard = props => (
  <div className="card col-s2 shapeCardIndividual">
  <div className="card-title">{props.name}</div>
    <div className="img-container" name={props.name} onClick={() => props.handleClicked(props.name)}>
      <img
        alt={props.name}
        src={props.image}
      />
      </div>
  </div>
);

export default ShapeCard;