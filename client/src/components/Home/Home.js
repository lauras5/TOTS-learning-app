import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize'
import './Home.css';
import ReactDOM from 'react-dom';
import Carousel from '../Carousel';
 

class Home extends Component {
    render() {
        return (

           <Fragment>
                <Carousel />
            </Fragment>
        )
    }
}

export default Home;
/* class Home extends Component {
    state = {
        login: 'false'
    };

// login functions go here
render() {
    return (
        <Fragment>
             <div className='home'>
     <img className='homeimage1' src="http://www.greatwolfkids.com/img/river-canyon-run-featured-game.png" alt=""/>       
     <img className='homeimage2' src="http://www.thekidzpage.com/freekidsgames/games/whack_a_grinch/whack-a-grinch-kids-online-game.png" alt=""/>   
     <img className='homeimage3' src="http://images.jedessine.com/_uploads/_tiny_galerie/20170414/jeu-happy-kitten-puzzle_qxt.png" alt=""/> 
     <img className='homeimage4' src="http://www.kidonlinegame.com/wp-content/uploads/thumbs/custom/D/dora-memory-game-for-kids-games-dora-free.png" alt=""/> 
  
   </div>
        </Fragment>

    )
 } 
} */


 

/* ReactDOM.render(
  <Home />,
  document.getElementById('container')
); */
/* export default Home; */
