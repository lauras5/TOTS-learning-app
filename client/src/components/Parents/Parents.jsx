import React, { Component, Fragment } from 'react';
import './Parents.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'



class Parent extends Component {

    render() {
        return (
            <Fragment>
<div className="empty"> </div>

          
<table>
<div className="table-div">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</div>
</table>


              
               {/*  <div classNameName="container horizontal rounded">
  <h2>Horizontal, Rounded</h2>
  <div classNameName="progress-bar horizontal">
    <div classNameName="progress-track">
      <div classNameName="progress-fill">
        <span>100%</span>
      </div>
    </div>
  </div>

  <div classNameName="progress-bar horizontal">
    <div classNameName="progress-track">
      <div classNameName="progress-fill">
        <span>75%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>60%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>20%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>34%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>82%</span>
      </div>
    </div>
  </div>
</div> */}

 {/* Horizontal, flat */} 
  <div className="container">
<div className="bar-div">
<div className="container1 horizontal flat">
  <h2>Highest Score</h2>

  <div>Colors</div>
  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill-colors">
        <span>80%</span>
      </div>
    </div>
  </div>

  <div>Numbers</div>
  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill-numbers">
        <span>40%</span>
      </div>
    </div>
  </div>

  <div>Letters</div>
  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill-letters">
        <span>60%</span>
      </div>
      
    </div>
  </div>
{/* 
  <div>Hello</div>
  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>20%</span>
      </div>
    </div>
  </div> */}

  {/* <div>Hello</div>
  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>34%</span>
      </div>
    </div>
  </div> */}

 {/*  <div>Hello</div>
  <div className="progress-bar horizontal">
    <div className="progress-track">
      <div className="progress-fill">
        <span>82%</span>
      </div>
    </div>
  </div> */}

</div>
</div>
</div>

{/* Vertical, rounded
 */}

{/* <div className="container vertical rounded">
  <h2>Vertical, Rounded</h2>
  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>100%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>75%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>60%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>20%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>34%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>82%</span>
      </div>
    </div>
  </div>
</div> */}


 {/* Vertical, flat */}


{/* <div className="container vertical flat">
  <h2>Vertical, Flat</h2>
  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>100%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>75%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>60%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>20%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>34%</span>
      </div>
    </div>
  </div>

  <div className="progress-bar">
    <div className="progress-track">
      <div className="progress-fill">
        <span>82%</span>
      </div>
    </div>
  </div>
</div> */}

{/* ***************************************************************************8 */}
{/* <div className="container">
<dl>
  <dt>
    Browser market share June 2015
  </dt>
  <dd className="game-name color"><span class="text">Colors</span></dd>
  <dd className="game-name numbers"><span class="text">Numbers</span></dd>
  <dd className="game-name shapes"><span class="text">Shapes</span></dd>
  <dd className="game-name alphabet"><span class="text">Alphabet</span></dd>
  <dd className="game-name memory-match"><span class="text">Memory Match</span></dd>
  <dd className="game-name memory-match"><span class="text">Colors</span></dd>
</dl>
</div> */}

            </Fragment>
        )
    }
}




export default Parent;