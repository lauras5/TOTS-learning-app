import React from "react";
import "./NumberCard.css";
/* import NumberCard from "./NumberCard.json"
 */
const NumberCard = props => (
    <div className="numbercard img-container hover"
      value={props.id}
      onClick={() => props.clickCount(props.id)}
      
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

export default NumberCard;
