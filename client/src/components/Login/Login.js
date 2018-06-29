import React, { Component, Fragment } from 'react';
<<<<<<< HEAD
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Row, Input, Card, Tabs, Tab, Modal, Button } from 'react-materialize';
import './Login.css';
import axios from 'axios'
import proxy from 'http-proxy-middleware'

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

    componentDidMount() {

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
                username : this.state.user.username,
                email: event.target.value,
                password: this.state.user.password,
                child: this.state.user.child
            }
        })
    }
    
    handlePword = event => {
        this.setState({
            user: {
                username : this.state.user.username,
                email: this.state.user.email,
                password: event.target.value,
                child: this.state.user.child
            }
        })
    }
    
    handleChild = event => {
        this.setState({
            user: {
                username : this.state.user.username,
                email: this.state.user.email,
                password: this.state.user.password,
                child: event.target.value
            }
        })
    }

    handleSignUp = event => {
        event.preventDefault()
        console.log(this.state)

        const user = {
            user: this.state.user
        };

        // axios.get("http://localhost:3001/api", {headers: {"Access-Control-Allow-Origin": "*"}})
        // .then(console.log('hello'))
        // post to route
        API.testpost()
        // API.testget()
        
        // if login is successful reroute to home page
        // set state as logged in
    }
    
    handleLogin = event => {
        event.preventDefault()
        console.log(this.state)
        
        const username = {
            username: this.state.user.username
        }
        
        API.testpost()
        API.testget()
    }
=======
import './Login.css';
import ReactDOM from 'react-dom';


class Login extends Component {
    state = {
        login: 'false'
    };
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2

    // login functions go here
    render() {
        return (
            <Fragment>
<<<<<<< HEAD
                <Modal id='modalBack' trigger={<Button id='loginModal'>LOGIN</Button>}>
                    <Card id='loginForm'>
                        <Row>
                            <Input type='text' name='username' value={this.state.user.username} onChange={this.handleUser} s={12} label="Username"/>
                            <Input type="password" name='password' value={this.state.user.password} onChange={this.handlePword} type="password" s={12} label="Password"/>
                        </Row>
                        <Button onClick={this.handleLogin}>Login</Button>
                    </Card>
                </Modal>
                <Modal trigger={<Button id='signupModal'>NEW USER</Button>}>
                    <Card id='loginForm'>
                        <Row>
                            <Input type='email' name='email' value={this.state.user.email} onChange={this.handleEmail} s={12} label="Email"/>
                            <Input type='text' name='username' value={this.state.user.username} onChange={this.handleUser} s={12} label='Username'/>
                            <Input type="password" name='password' value={this.state.user.password} onChange={this.handlePword} type="password" s={12} label="Password"/>
                            <Input type="text" name='child' value={this.state.user.child} onChange={this.handleChild} type="text" s={12} label="Child's Name"/>
                        </Row>
                        <Button onClick={this.handleSignUp}>Sign Up</Button>
                    </Card>
                </Modal>
=======
                <div className='container'>
                    {/* <h2 id='loginTitle'>Login Page</h2> */}
                    <div className='row'>
                        <div className='col s3'>
                            <img id='monkey' src='./images/monkey.png' alt="lemur" width="250" height="350" />
                        </div>

                        <div className='col s6'>
                            <ul id="tabs-swipe-demo" className="tabs">
                                <li className="tab col s6"><a className='active' href="#loginBox">Existing User</a></li>
                                <li className="tab col s6"><a href="#newUser">New User</a></li>
                            </ul>

                            <div id='loginBox' className="card blue darken-4">
                                <div className="card-content white-text">
                                    <span className="card-title">Existing Members Login Here</span>
                                    <form action="" name='loginForm'>
                                        <input placeholder='Username' id='userInput' type="text" name='username' />
                                        <input placeholder='Password' id='userInput' type="text" name='password' />
                                        <button id='submitBtn'>Let's Go!</button>
                                        <br></br>
                                    </form>
                                </div>
                            </div>

                            <div id='newUser' className="card blue darken-4 userForm">
                                <div className="card-content white-text">
                                    <span className="card-title">Fill Out Form for New Users</span>
                                    <form action="" name='loginForm'>
                                        <input placeholder='Email Address' id='userInput' type="text" name='email address' />
                                        <input placeholder='Username' id='userInput' type="text" name='username' />
                                        <input placeholder='Password' id='userInput' type="text" name='password' />
                                        <button id='submitBtn'>Let's Go!</button>
                                        <br></br>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <div className='col s3'>
                        </div>

                    </div>
                    <div>I am the Login page</div>
                    <div className='card tree'>
                        <form action="/user" name='loginForm'>
                            <label htmlFor="username">Username</label>
                            <input id='userInput' type="text" name='username' />
                            <label htmlFor="email">Email</label>
                            <input id='userInput' type="text" name='username' />
                            <label htmlFor="username">Password</label>
                            <input id='userInput' type="text" name='username' />
                            <button id='submitBtn'>Let's Go!</button>
                        </form>
                    </div>
                </div>
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2
            </Fragment>
        )
    }
}

<<<<<<< HEAD
export default Login;

=======

export default Login;
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2
