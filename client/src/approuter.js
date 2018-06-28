import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Parents from './components/Parents';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About'



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
                </div>
            </Router>
        )
    }
// }

export default AppRouter;