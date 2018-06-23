import React, { Component, Fragment } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';


class Login extends Component {
    state = {
        login: 'false'
    };


    // login functions go here
    render() {
        return (
            <Fragment>
                <div>I am the Login page</div>
                <div className='card tree'>
                    <form action="" name='loginForm'>
                        <label htmlFor="username">Username</label>
                        <input id='userInput' type="text" name='username' />
                        <label htmlFor="email">Email</label>
                        <input id='userInput' type="text" name='username' />
                        <label htmlFor="username">Password</label>
                        <input id='userInput' type="text" name='username' />
                        <button id='submitBtn'>Let's Go!</button>
                    </form>
                </div>
            </Fragment>

        )
    }
}


export default Login;