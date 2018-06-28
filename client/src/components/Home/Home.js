    import React, { Component, Fragment } from 'react';
    import { Link } from 'react-router-dom';
    import { Button, Icon } from 'react-materialize'
    import './Home.css';
    import NumberCard from '../NumberCard';
    import ReactDOM from 'react-dom';
    /* import NumberCard from "./NumberCard.json"; */
    /* import Carousel from '../Carousel'; */
    /* import ReactCarousel from '../ReactCarousel'; */
    
    class Home extends Component {
        render() {
            return (

            <Fragment>
                   {/*  <Carousel /> */}
                    {/* <ReactCarousel /> */}
                    <NumberCard />
                </Fragment>
            )
        }
    }

    export default Home;