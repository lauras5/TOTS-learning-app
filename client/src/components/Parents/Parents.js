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
            numberGamePieData: {},
            shapeGamePieData: {},
            soundGamePieData: {},
            colorGamePieData: {}
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
            this.setSoundGamePieData()
            this.setShapeGamePieData()
            this.setColorGamePieData()
            this.setRadarData()
          })
    };

    setNumberGamePieData = () => {
        const user = this.state.currentUser
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
    };

    setSoundGamePieData = () => {
        const user = this.state.currentUser
        this.setState(
            {
                soundGamePieData: {
                    labels: [
                        'NumberOfCorrectAnswers',
                        'NumberOfIncorrectAnswers',
                    ],
                    datasets: [{
                        data: [user.soundGame.correctCount, user.soundGame.incorrectCount],
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
    };

    setColorGamePieData = () => {
        const user = this.state.currentUser
        this.setState(
            {
                colorGamePieData: {
                    labels: [
                        'NumberOfCorrectAnswers',
                        'NumberOfIncorrectAnswers',
                    ],
                    datasets: [{
                        data: [user.colorGame.correctCount, user.colorGame.incorrectCount],
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
    };

    setShapeGamePieData = () => {
        const user = this.state.currentUser
        this.setState(
            {
                shapeGamePieData: {
                    labels: [
                        'NumberOfCorrectAnswers',
                        'NumberOfIncorrectAnswers',
                    ],
                    datasets: [{
                        data: [user.shapeGame.correctCount, user.shapeGame.incorrectCount],
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
    };

    setRadarData = () => {
        const user = this.state.currentUser
        const numberGamePercent = (user.numberGame.correctCount / (user.numberGame.correctCount + user.numberGame.incorrectCount)) * 100
        const shapeGamePercent = (user.shapeGame.correctCount / (user.shapeGame.correctCount + user.shapeGame.incorrectCount)) * 100
        const soundGamePercent = (user.soundGame.correctCount / (user.soundGame.correctCount + user.soundGame.incorrectCount)) * 100
        const colorGamePercent = (user.colorGame.correctCount / (user.colorGame.correctCount + user.colorGame.incorrectCount)) * 100
        
        console.log(numberGamePercent)
        console.log(shapeGamePercent)
        console.log(soundGamePercent)
        // console.log(colorGamePercent)
        
        this.setState( 
            { 
                radarData: {
                    labels: ['Number Game', 'Shape Game', 'Sound Game', 'Color Game'],
                    datasets: [
                    {
                        label: 'All games dataset',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [numberGamePercent, shapeGamePercent, soundGamePercent, colorGamePercent]
                    },
                    ]
                }
            }
        )
    };



    render() {
        return (
            <Fragment>
                <Navbar />
                <div>
                    <div className="numberGameChart"> 
                        <h3>Number Game Statistics</h3>
                        <Pie 
                            data={this.state.numberGamePieData} 
                            width={200}
                            height={100}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                    <div className="soundGameChart">
                        <h3>Sound Game Statistics</h3>
                            <Pie 
                                data={this.state.soundGamePieData} 
                                width={200}
                                height={100}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                    </div>
                    <div className="shapeGameChart">
                        <h3>Shape Game Statistics</h3>
                            <Pie 
                                data={this.state.shapeGamePieData} 
                                width={200}
                                height={100}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                    </div>
                    <div className="colorGameChart">
                        <h3>Color Game Statistics</h3>
                            <Pie 
                                data={this.state.colorGamePieData} 
                                width={200}
                                height={100}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                    </div>
                    <div className="radarChart">
                        <h3>All Game Statistics</h3>
                            <Radar 
                                data={this.state.radarData} 
                                width={200}
                                height={100}
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