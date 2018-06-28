import React, { Component, Fragment } from 'react';
import API from '../../utils/API'
// import ReactDOM from 'react-dom';
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

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)

        const user = {
            user: this.state.user
        };

        // post to route
        API.postUsers(user)

    }

    render() {
        return (
            <Fragment>
                <form name='loginForm'>
                    <label htmlFor="email">Email</label>
                    <input id='userInput' type="text" name='email' value={this.state.user.email} onChange={this.handleEmail} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input id='userInput' type="text" name='password' value={this.state.user.password} onChange={this.handlePword} />
                    <br />
                    <label htmlFor="childname">Child Name</label>
                    <input id='userInput' type="text" name='child' value={this.state.user.child} onChange={this.handleChild} />

                    <button id='submitBtn' onClick={this.handleSubmit}>create user</button>
                </form>
            </Fragment>
        )
    }
}

export default Login;


// class Login extends Component {
//     state = {
//         login: 'false'
//     };

//     // login functions go here
//     render() {
//         return (

            // <Fragment>
            //     <div className='container'>
            //         {/* <h2 id='loginTitle'>Login Page</h2> */}
            //         <div className='row'>
            //             <div className='col s3'>
            //                 <img id='monkey' src='./images/monkey.png' alt="lemur" width="250" height="350" />
            //             </div>

            //             <div className='col s6'>
            //                 <ul id="tabs-swipe-demo" className="tabs">
            //                     <li className="tab col s6"><a className='active' href="#loginBox">Existing User</a></li>
            //                     <li className="tab col s6"><a href="#newUser">New User</a></li>
            //                 </ul>

            //                 <div id='loginBox' className="card blue darken-4">
            //                     <div className="card-content white-text">
            //                         <span className="card-title">Existing Members Login Here</span>
            //                         <form action="" name='loginForm'>
            //                             <input placeholder='Username' id='userInput' type="text" name='username' />
            //                             <input placeholder='Password' id='userInput' type="text" name='password' />
            //                             <button id='submitBtn'>Let's Go!</button>
            //                             <br></br>
            //                         </form>
            //                     </div>
            //                 </div>

            //                 <div id='newUser' className="card blue darken-4 userForm">
            //                     <div className="card-content white-text">
            //                         <span className="card-title">Fill Out Form for New Users</span>
            //                         <form action="" name='loginForm'>
            //                             <input placeholder='Email Address' id='userInput' type="text" name='email address' />
            //                             <input placeholder='Username' id='userInput' type="text" name='username' />
            //                             <input placeholder='Password' id='userInput' type="text" name='password' />
            //                             <button id='submitBtn'>Let's Go!</button>
            //                             <br></br>
            //                         </form>
            //                     </div>
            //                 </div>

            //             </div>

            //             <div className='col s3'>
            //             </div>

            //         </div>
            //         <div>I am the Login page</div>
            //         <div className='card tree'>
            //             <form action="/user" name='loginForm'>
            //                 <label htmlFor="username">Username</label>
            //                 <input id='userInput' type="text" name='username' />
            //                 <label htmlFor="email">Email</label>
            //                 <input id='userInput' type="text" name='username' />
            //                 <label htmlFor="username">Password</label>
            //                 <input id='userInput' type="text" name='username' />
            //                 <button id='submitBtn'>Let's Go!</button>
            //             </form>
            //         </div>
            //     </div>
            // </Fragment>
//         )
//     }
// }


// export default Login;