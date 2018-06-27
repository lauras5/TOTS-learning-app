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
                    <div className="row">
                        <div className="col s12">
                            {/*  <!--Images and carousel items below --> */}
                            <div width="100%" id="carousel-div" className="carousel userInput">
                                <div className="left">
                                    <a href="Previo" class="movePrevCarousel middle-indicator-text waves-effect waves-light">
                                        <i className="material-icons left  middle-indicator-text">chevron_left</i>
                                    </a>
                                </div>

                                <a className="carousel-item submitBTN" id="letters" data-search='Sports' href="#letters">
                                    <img height="190" width="400" src="https://toddlermasterclass.com/wp-content/uploads/2015/07/Fun-Games-For-Preschoolers.png"
                                        alt="" />
                                </a>
                                <a className="carousel-item submitBTN" id="numbers" data-search='Music' href="#numbers">
                                    <img height="190" width="400" src="http://imgsdown.1mobile.com/group1/M00/A5/58/S36rZlagE-mAOxmfAAQhEBsG6mg860.png" alt="" />
                                </a>
                                <a className="carousel-item submitBTN" id="colors" data-search='Technology' href="#colors">
                                    <img height="190" width="400" src="https://i.ytimg.com/vi/e1dHmEJcMG0/maxresdefault.jpg" alt="" />
                                </a>
                                <Link to='/games/cardgame'>
                                    <a className="carousel-item submitBTN" id="memory-match" data-search='Food' href="#memory-match">
                                        <img height="190" width="400" src="https://images-na.ssl-images-amazon.com/images/I/713UI4Vy1-L.png" alt="" />
                                    </a></Link>
                                <a className="carousel-item submitBTN" id="shapes" data-search='Arts' href="#shapes!">
                                    <img height="190" width="400" src="https://i.ytimg.com/vi/AQbnbrTHgtA/maxresdefault.jpg" alt="" />
                                </a>
                                <a className="submitBTN btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </a>
                                <div className="right">
                                    <a href="Siguiente" className="moveNextCarousel middle-indicator-text waves-effect waves-light">
                                        <i className="material-icons right middle-indicator-text">chevron_right</i>
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



