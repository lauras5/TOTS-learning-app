import React, { Component, Fragment } from 'react';
import API from '../../utils/API';
import {Link} from 'react-router-dom';
import { Row, Input, Card, Tabs, Tab, Modal, Button } from 'react-materialize';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // login: 'false',
            user: {
                email: '',
                password: '',
                child: ''
            }
        };
    }

    // componentDidMount() {
    //     // open modal
    // }

    handleEmail = event => {
        this.setState({
            user: {
                email: event.target.value,
                password: this.state.user.password,
                child: this.state.user.child
            }
        })
    }

    handlePword = event => {
        this.setState({
            user: {
                email: this.state.user.email,
                password: event.target.value,
                child: this.state.user.child
            }
        })
    }

    handleChild = event => {
        this.setState({
            user: {
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

        // post to route
        API.postUsers(user)

        // if login is successful reroute to home page
        // set state as logged in
    }

    handleLogin = event => {
        event.preventDefault()
        console.log(this.state)

        const user = {
            user: this.state.user
        }

        API.getUsers(user)
    }

    render() {
        return (
            <Fragment>
                <Modal
                    trigger={<Button id='loginModal'>MODAL</Button>}>
                    <Tabs className='tab'>
                        <Tab title="Login" active>

                            <Card id='loginForm'>
                                <Row>
                                    <Input type='email' name='email' value={this.state.user.email} onChange={this.handleEmail} s={12} />

                                    <Input type="password" name='password' value={this.state.user.password} onChange={this.handlePword} type="password" s={12} />

                                    <Input type="text" name='child' value={this.state.user.child} onChange={this.handleChild} type="text" s={12} />
                                </Row>
                                <Button onClick={this.handleLogin}>Login</Button>
                            </Card>
                        </Tab>
                        <Tab title="signupForm">
                            <Card>
                                <Row>
                                    <form id='loginForm'>
                                        <Input id='userInput' type='email' name='email' value={this.state.user.email} onChange={this.handleEmail} s={12} label="Email" />
                                        <Input id='userInput' type="text" name='password' value={this.state.user.password} onChange={this.handlePword} type="password" s={12} label="Password" />
                                        <Input id='userInput' type="text" name='password' value={this.state.user.password} onChange={this.handlePword} type="password" s={12} label="Re-Type Password" />
                                        <Input id='userInput' type="text" name='child' value={this.state.user.child} onChange={this.handleChild} type="text" s={12} label="Child's Name" />
                                    </form>
                                </Row>
                                <Link to="/home">
                                <Button onClick={this.handleSignUp}>
                                    Sign Up
                                </Button>
                                </Link>

                            </Card>
                        </Tab>

                    </Tabs>
                </Modal>

                <form name='loginForm'>
                    <label htmlFor="email">Email</label>
                    <input id='userInput' type="text" name='email' value={this.state.user.email} onChange={this.handleEmail} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input id='userInput' type="text" name='password' value={this.state.user.password} onChange={this.handlePword} />
                    <br />
                    <label htmlFor="childname">Child Name</label>
                    <input id='userInput' type="text" name='child' value={this.state.user.child} onChange={this.handleChild} />
                </form>


            </Fragment>
        )
    }
}

export default Login;

