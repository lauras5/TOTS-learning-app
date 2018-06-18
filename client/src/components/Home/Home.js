import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'
import './Home.css';

const Home = () => {

        return (
            <Fragment>
                <Button waves='light'>
                    <Icon>thumb_up</Icon>
                </Button>
                <ul>
                    <li><Link className='nav-item nav-link' to='/cardGame'>
                    <img src="https://www.google.com/search?rlz=1C1CHBF_enUS737US742&tbm=isch&q=memory+card+game&chips=q:memory+card+game,g_4:match&sa=X&ved=0ahUKEwi95az1ndTbAhVJnlkKHXdTD5kQ4lYIMCgA&biw=681&bih=642&dpr=1#imgrc=zaE9U-jmkX-IaM:" alt=""/>
                    <p>Memory Game</p></Link></li>
                    
                    <li><Link className='nav-item nav-link' to='/colorGame'>
                    <img src="https://www.google.com/search?rlz=1C1CHBF_enUS737US742&tbm=isch&q=memory+card+game&chips=q:memory+card+game,g_4:match&sa=X&ved=0ahUKEwi95az1ndTbAhVJnlkKHXdTD5kQ4lYIMCgA&biw=681&bih=642&dpr=1#imgrc=zaE9U-jmkX-IaM:" alt=""/>
                    <p>Color Game</p></Link></li>
                    
                    {/* <li><Link className='nav-item nav-link' to='/numbersGame'>Numbers Game</Link></li> */}
                    {/* <li><Link className='nav-item nav-link' to='/shapesGame'>Shapes Game</Link></li> */}
                    {/* <li><Link className='nav-item nav-link' to='/alphabetGame'>Alphabet Game</Link></li> */}
                </ul>
            </Fragment>
        )
    }  



export default Home;
