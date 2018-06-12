import React, { Component, Fragment } from 'react';
import './Login.css';


class Login extends Component {
    state = {
        login: 'false'
    };


    // login functions go here
    render() {
        return (
            <Fragment>
                <div>I am the Login page</div>
                <form action="" name='loginForm'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='username' />
                    <label htmlFor="username">Password</label>
                    <input type="text" name='username' />
                    <button>Let's Go!</button>
                </form>
            </Fragment>

        )
    }
}

export default Login;