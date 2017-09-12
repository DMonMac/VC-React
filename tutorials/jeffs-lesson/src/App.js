import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
  constructor(props){
    super(props); //Makes it accessible globally.
    this.state = {qty:0}; // initial state
    this.buy = this.buy.bind(this);
  }
  buy(){
    this.setState({qty: this.state.qty+1})
  }
  render() {
    return (
      <div>
        <p>Android = $99</p>
          <button onClick={this.buy}>Buy</button>
          <h3>{this.state.qty}</h3>
      </div>
    );
  }
}

export default Product;
