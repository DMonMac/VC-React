import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Today from './Today.js';
import Counter from './Counter.js';


class App extends Component {
  render() {
    return (
      <div>
        <Welcome name='Me' />
        <Today day='Wednesday' />
        <Counter /><Counter /><Counter />

      </div>
    );
  }
}

export default App;
