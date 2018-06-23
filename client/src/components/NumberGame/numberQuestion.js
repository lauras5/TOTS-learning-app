// this is the file that will hold the number image
import React from 'react'

const numberQuestion = props => (
    <div className="card">
        <div className="question-container card-image" name={props.name}>
            <img
                alt={props.name}
                src={props.image}
            />
            <p>hi</p>
        </div>
  </div>
);

export default numberQuestion;