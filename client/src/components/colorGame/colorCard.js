import React from 'react'


import "./colorCard.css";

const ColorCard = props => (
  <div className="card">
    <div className="img-container" onClick = {()=>props.handleClicked(props.id)}>
      <img
        alt={props.name}
        src={props.image}
      />
    </div>
    
       
  </div>
);

export default ColorCard;