import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Parents from './components/Parents';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About'
import Cards from './components/cardGame';
import Carousel from './components/Carousel';

const AppRouter = () => {
// class AppRouter extends Component {
//     render() {
        return (
            <Router>
                <div>
                    {/* edit username */}
                    <Navbar username='User' message='welcome back!'/>
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Parents' component={Parents} />
                    <Route exact path='/cardGame' component={Cards} />
                    <Route path='/Carousel' component={Carousel} />
                    {/* <Route path='/numbersGame' component={Numbers} /> */}
                    {/* <Route path='/shapesGame' component={Shapes} /> */}
                    {/* <Route path='/alphabetGame' component={Alphabet} /> */}
                </div>
            </Router>
        )
    }
// }

export default AppRouter;