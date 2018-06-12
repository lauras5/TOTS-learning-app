import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/main';
import About from './components/about'
import Profile from './components/profile';
import Shapes from './components/shapes';
import Alphabet from './components/alphabet';
import Numbers from './components/numbers';
import Colors from './components/colors';
import Login from './components/Login';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* edit username */}
                    <Navbar username='Laura' message='welcome back!'/>
                    <Route path='/main' component={Main} />
                    <Route path='/about' component={About} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/shapes' component={Shapes} />
                    <Route path='/alphabet' component={Alphabet} />
                    <Route path='/numbers' component={Numbers} />
                    <Route path='/colors' component={Colors} />
                    <Route path='/Login' component={Login} />
                </div>
            </Router>
        )
    }
}

export default AppRouter;