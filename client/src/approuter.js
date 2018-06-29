<<<<<<< HEAD
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
import ShapeGame from './components/shapeGame/shapeGame';
import Home from './components/Home';


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
                    <Route path='/games/colorgame' component={ColorGame} />
                    <Route path='/games/cardgame' component={Cards} />
                    <Route path='/games/numbergame' component={NumberGame} />
                    <Route path='/games/shapegame' component={ShapeGame} />
                </div>
            </Router>
        )
    }
// }
=======
    import React from 'react';
    import { BrowserRouter as Router, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Parents from './components/Parents';
    import Login from './components/Login';
    import Home from './components/Home';
    import About from './components/About'
    import Cards from './components/cardGame';
    import Carousel from './components/Carousel';
    /* import ReactCarousel from './components/ReactCarousel'; */
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
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2

                        <Route path='/Login' component={Login} />
                        <Route path='/Home' component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Parents' component={Parents} />
                        <Route path='/colorGame' component={ColorGame} />
                        <Route path='/cardGame' component={Cards} />
                        <Route path='/numberGame' component={NumberGame} />
                    </div>
                </Router>
            )
        }
    // }

    export default AppRouter;