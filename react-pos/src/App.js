import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {qty:0};
  }

  changeAmt(ctr){
    this.setState({
      qty: this.state.qty + ctr
    });
  }

  render() {
    return (
      <div>
        Qty: {this.state.qty}
        <br/>
        <button onClick={ this.changeAmt.bind(this, 1) }>+</button>
        <button onClick={ this.changeAmt.bind(this, -1) }>-</button>
      </div>
    )
  }
}





class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React POS</h2>
        </div>
        <p className="App-intro">
          App that computes your expenses for you XD.
        </p>

        <Item />
      </div>
    );
  }
}

export default App;
