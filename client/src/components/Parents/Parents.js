import React, { Component, Fragment } from 'react';
import './Parents.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Pie, Radar} from 'react-chartjs-2'
import API from '../../utils/API';


class Parent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            numberGamePieData: {}
        }
    };

    componentDidMount() {
        const currentUserName = sessionStorage.getItem('username')
        this.loadCurrentUser(currentUserName)
    };
    
    
    loadCurrentUser = (currentUserName) => {
        API.getCurrentUser(currentUserName)
        .then ( res => {
            // if user is null, handle it: perhaps route to login page
            this.setState({ currentUser: res.data})
            console.log(this.state.currentUser)
        }). then ( res => {
            // SET all graph data
            this.setNumberGamePieData()
          })
    };

    setNumberGamePieData = () => {
        const user = this.state.currentUser
        console.log(this.state.currentUser)

        this.setState(
            {
                numberGamePieData: {
                    labels: [
                        'NumberOfCorrectAnswers',
                        'NumberOfIncorrectAnswers',
                    ],
                    datasets: [{
                        data: [user.numberGame.correctCount, user.numberGame.incorrectCount],
                        backgroundColor: [
                        '#36A2EB',
                        '#FF6384'
                        ],
                        hoverBackgroundColor: [
                        '#36A2EB',
                        '#FF6384'
                        ]
                    }]
                }
            }
        )
        
        
    }



    render() {
        return (
            <Fragment>
                <Navbar />
                <div>
                    <div className="numberGameChart"> 
                        <h3>Number Game Statistics</h3>
                        <Pie 
                            data={this.state.numberGamePieData} 
                            width={300}
                            height={150}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>

                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Parent;