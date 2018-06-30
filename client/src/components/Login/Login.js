import React, { Component, Fragment } from 'react';
import API from '../../utils/API';
// import { Link } from 'react-router-dom';
import { Row, Input, Card, Modal, Button } from 'react-materialize';
import './Login.css';
import {Redirect} from 'react-router-dom'
// import axios from 'axios'
// import proxy from 'http-proxy-middleware'

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
        // console.log(this.state)

        API.postUsers(this.state.user)
            .then(console.log(this.state.user))
    }
    
    handleLogin = event => {
        event.preventDefault()

        // console.log(this.state.user.username)
        // API.authenticate(this.state.user.username)  
        API.login(this.state.user.username)      

    }

    render() {
        return (
            <Fragment>
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
            </Fragment>
        )
    }
}

export default Login;

