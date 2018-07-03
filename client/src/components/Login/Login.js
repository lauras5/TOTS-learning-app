import React, { Component, Fragment } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Row, Input, Card, Modal, Button } from 'react-materialize';
import './Login.css';
import Navbar from '../Navbar'
import Footer from '../Footer'
// import User from '../'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // login: 'false',
            user: {
                username: '',
                email: '',
                password: '',
                child: ''
            }
        };
    }

    handleUser = event => {
        this.setState({
            user: {
                username: event.target.value,
                email: this.state.user.email,
                password: this.state.user.password,
                child: this.state.user.child
            }
        })
    }

    handleEmail = event => {
        this.setState({
            user: {
                username: this.state.user.username,
                email: event.target.value,
                password: this.state.user.password,
                child: this.state.user.child
            }
        })
    }

    handlePword = event => {
        this.setState({
            user: {
                username: this.state.user.username,
                email: this.state.user.email,
                password: event.target.value,
                child: this.state.user.child
            }
        })
    }

    handleChild = event => {
        this.setState({
            user: {
                username: this.state.user.username,
                email: this.state.user.email,
                password: this.state.user.password,
                child: event.target.value
            }
        })
    }

    handleSignUp = event => {
        event.preventDefault()
        // console.log(this.state)

        sessionStorage.setItem('username', this.state.user.username)
        API.postUsers(this.state.user)
            .then(console.log(this.state.user))

        this.props.history.push("/home")
    }

    handleLogin = async event => {
        event.preventDefault()

        console.log(this.state.user.username)
        API.login(this.state.user.username, this.state.user.password)
        API.authenticate(this.state.user.username, this.state.user.password)
            .then(sessionStorage.setItem('username', this.state.user.username))

        // API.findUser(this.state.user.username)
        //     .then(console.log(this.state.user.username))
        
        this.props.history.push("/home")
    }

    render() {
        return (
            <Fragment>
                {/* <Navbar /> */}
                <div className='logo'>
                    <div className="rectangle">
                        <div id='navSection' className="navigation">
                            <img id='sun' className="left" src="../images/sun.png" />
                            <h1 id="appLogo">T.O.T.S.</h1>
                            <ul>
                                <li><Link className='nav-item nav-link' to='/about'>About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Modal id='loginBack' trigger={<Button id='loginModal'>LOGIN</Button>}>
                    <Card id='loginForm'>
                        <Row>
                            <Input type='text' name='username' value={this.state.user.username} onChange={this.handleUser} s={12} label="Username" />
                            <Input type="password" name='password' value={this.state.user.password} onChange={this.handlePword} s={12} label="Password" />
                        </Row>
                        <Button className='btn waves-effect waves-light modal-close' onClick={this.handleLogin}>Login</Button>
                    </Card>
                </Modal>
                <Modal id='signupBack' trigger={<Button id='signupModal'>REGISTER</Button>}>
                    <Card id='signupForm'>
                        <Row>
                            <Input type='email' name='email' value={this.state.user.email} onChange={this.handleEmail} s={12} label="Email" />
                            <Input type='text' name='username' value={this.state.user.username} onChange={this.handleUser} s={12} label='Username' />
                            <Input type="password" name='password' value={this.state.user.password} onChange={this.handlePword} s={12} label="Password" />
                            <Input type="text" name='child' value={this.state.user.child} onChange={this.handleChild} type="text" s={12} label="Child's Name" />
                        </Row>
                        <Button className='btn waves-effect waves-light modal-close' onClick={this.handleSignUp}>Sign Up</Button>

                    </Card>
                </Modal>
                <Footer />
            </Fragment>
        )
    }
}

export default Login;

