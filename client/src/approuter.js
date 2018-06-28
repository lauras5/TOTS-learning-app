import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Parents from './components/Parents';
import Login from './components/Login';
import About from './components/About';
import Cards from './components/cardGame';
import ColorGame from './components/colorGame';
import NumberGame from './components/NumberGame';
import Games from './components/Games'

const AppRouter = () => {
// class AppRouter extends Component {
//     render() {
        return (
            <Router>
                <div>
                    {/* edit username */}
                    <Navbar username='User' message='welcome back!'/>
                    <Route path='/login' component={Login} />
                    <Route path='/home' component={Games} />
                    <Route path='/about' component={About} />
                    <Route path='/parents' component={Parents} />
                    <Route path='/games/cardgame' component={Cards}/>
                    <Route path='/games/colorGame' component={ColorGame}/>
                    <Route path='/games/NumberGame' component={NumberGame}/>
                </div>
            </Router>
        )
    }
// }

export default AppRouter;