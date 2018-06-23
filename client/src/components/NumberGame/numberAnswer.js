// this is the file that will hold the number image
import React from 'react'

const numberAnswer = props => (
    <div className="answer-container">
        <a href="" className="waves-effect waves-light btn" id="btn-1">{props.choice1}</a>
        <a href="" className="waves-effect waves-light btn" id="btn-2">{props.choice2}</a>
        <a href="" className="waves-effect waves-light btn" id="btn-3">{props.choice3}</a>
        <a href="" className="waves-effect waves-light btn" id="btn-4">{props.choice4}</a>
  </div>
);

export default numberAnswer;