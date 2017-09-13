import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {qty:0};
  }

  changeQty(ctr){
    if (this.state.qty == 0){
      if (ctr<0){
        alert("You haven't added this item yet.");
      } else {
        this.setState({
          qty: this.state.qty + ctr
        });
      }
    } else {
        this.setState({
          qty: this.state.qty + ctr
        });
      }
  }






  render() {
    return (
      <div>
        Qty: {this.state.qty}
        <br/>
        <button onClick={ this.changeQty.bind(this, 1) }>+</button>
        <button onClick={ this.changeQty.bind(this, -1) }>-</button>
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
