import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Parents from './components/Parents';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About'
import Cards from './components/cardGame';

const AppRouter = () => {
// class AppRouter extends Component {
//     render() {
        return (
            <Router>
                <div>
                    {/* edit username */}
                    <Navbar username='User' message='welcome back!'/>
                    <Route path='/Login' component={Login} />
                    <Route path='/Home' component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Parents' component={Parents} />
                    <Route path='/cardGame' component={Cards} />
                    {/* <Route path='/numbersGame' component={Numbers} /> */}
                    {/* <Route path='/shapesGame' component={Shapes} /> */}
                    {/* <Route path='/alphabetGame' component={Alphabet} /> */}
                </div>
            </Router>
        )
    }
// }

export default AppRouter;