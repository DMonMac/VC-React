import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DogAPI from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Public APIs</h2>
        </div>
        <div>
          <DogAPI></DogAPI>
        </div>
      </div>
    );
  }
}

export default App;
