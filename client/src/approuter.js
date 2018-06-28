import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Parents from './components/Parents';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About'
import Cards from './components/cardGame';
// import Carousel from './components/Carousel';
import ColorGame from './components/colorGame/colorGame';
import NumberGame from './components/NumberGame/numberGame';


const AppRouter = () => {
// class AppRouter extends Component {
//     render() {
        return (
            <Router>
                <div>
                    {/* edit username */}
                    <Navbar username='User' message='welcome back!'/>
                    <Route path='/login' component={Login} />
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/parents' component={Parents} />
                    <Route path='/games/colorgame' component={ColorGame} />
                    <Route path='/games/cardgame' component={Cards} />
                    <Route path='/games/numbergame' component={NumberGame} />
                </div>
            </Router>
        )
    }
// }

export default AppRouter;