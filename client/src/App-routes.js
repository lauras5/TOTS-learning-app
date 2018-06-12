import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

//variables

class App extends Component {
  state = {
    response: ''
  };

  // call the callApi method and set state to API response
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/')
  }

  render() {
    return (
      <div className='App'>
        <Header />
        
        <header className='App-header'>
          <p>Hello!</p>
        </header>
        <p className='App-intro'>{this.state.response}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
