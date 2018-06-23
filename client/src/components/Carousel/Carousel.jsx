import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'
import ReactDOM from 'react-dom'
import './Carousel.css';



class Carousel extends Component {
   
    render() {
        return (
            <Fragment>
                <div>
                    <div class="row">
                        <div class="col s12">
                           {/*  <!--Images and carousel items below --> */}
        <div width="100%" id="carousel-div" class="carousel userInput">
                                <div class="left">
                                    <a href="Previo" class="movePrevCarousel middle-indicator-text waves-effect waves-light">
                                        <i class="material-icons left  middle-indicator-text">chevron_left</i>
                                    </a>
                                </div>

                                <a class="carousel-item submitBTN" id="letters" data-search='Sports' href="#letters">
                                    <img height="190" width="400" src="https://toddlermasterclass.com/wp-content/uploads/2015/07/Fun-Games-For-Preschoolers.png"
                                        alt="" />
                                </a>
                                <a class="carousel-item submitBTN" id="numbers" data-search='Music' href="#numbers">
                                    <img height="190" width="400" src="http://imgsdown.1mobile.com/group1/M00/A5/58/S36rZlagE-mAOxmfAAQhEBsG6mg860.png" alt="" />
                                </a>
                                <a class="carousel-item submitBTN" id="colors" data-search='Technology' href="#colors">
                                    <img height="190" width="400" src="https://i.ytimg.com/vi/e1dHmEJcMG0/maxresdefault.jpg" alt="" />
                                </a>
                                <a class="carousel-item submitBTN" id="memory-match" data-search='Food' href="#memory-match">
                                    <img height="190" width="400" src="https://images-na.ssl-images-amazon.com/images/I/713UI4Vy1-L.png" alt="" />
                                </a>
                                <a class="carousel-item submitBTN" id="shapes" data-search='Arts' href="#shapes!">
                                    <img height="190" width="400" src="https://i.ytimg.com/vi/AQbnbrTHgtA/maxresdefault.jpg" alt="" />
                                </a>
                                <a class="submitBTN btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
                                </a>
                                <div class="right">
                                    <a href="Siguiente" class="moveNextCarousel middle-indicator-text waves-effect waves-light">
                                        <i class="material-icons right middle-indicator-text">chevron_right</i>
                                    </a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                );

        </Fragment>

        )
    }
}


export default Carousel;



