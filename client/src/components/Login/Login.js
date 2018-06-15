import React, { Component, Fragment } from 'react';
import './Login.css';


class Login extends Component {
    state = {
        login: 'false'
    };


    // login functions go here
    render() {
        return (
            <div class="tree">
            <fragment>
{/*                 <div>I am the Login page</div> */}
                <form action="" name='loginForm'>
                    <label id="username" htmlFor="username">Username</label>
                    <input id="username" type="text" name='username' />
{/*                     <label htmlFor="email">Email</label> */}
                  {/*   <input type="text" name='username' /> */}
                    <label id="password" htmlFor="password">Password</label>
                    <input id="password" type="text" name='password' />
                    <button id="login">  Let's Go!</button>
                </form>
            </fragment>
            </div>

        )
    }
}



export default Login;