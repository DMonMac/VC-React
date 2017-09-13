import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React</h2>
//        </div>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
//}

//class Clients extends Component {
//  constructor(props){
//    super(props);
//    this.state={
//      clients: [
//        {first_name:"D", last_name:"Mac", email:"dmac@email.com", password:"Thisis@test", bal: 1000000, card_number: 19864523154865},
//        {first_name:"Mac", last_name:"D", email:"macd@email.com", password:"Thisis@test2", bal: 9999999, card_number: 86215648962135},
//        {first_name:"Fail", last_name:"Being", email:"failbeing@email.com", password:"Thisis@test3", bal: 100, card_number: 34861324657986}
//      ]
//    };
//  }

class CurrBal extends Component {
  render(){
    return(
      <div>
        Balance: {this.props.bal} PhP
      </div>
    )
  }

}

class Transaction extends Component {
  constructor(props){
    super(props);
    this.state = {bal:0};
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit(e){
    e.preventDefault();
    this.setState({bal: this.state.bal + parseInt(this.refs.amt.value)});
    alert("Deposited "+ this.refs.amt.value + " PhP");
  }

  withdraw(e){
    e.preventDefault();
    if (parseInt(this.refs.amt.value)<=this.state.bal) {
      this.setState({bal: this.state.bal - parseInt(this.refs.amt.value)});
      alert("Withdrew "+ this.refs.amt.value + " PhP");
    } else {
        alert("Insufficient balance");
    }
  }

  render(){
    return(
      <div className="container">

        <div className="jumbotron">
          <h3>React ATM</h3>
        </div>

        <CurrBal bal={this.state.bal}/>

        <form>
          <div className="form-group">
            <label></label>
              <input
                type="number"
                min="0"
                placeholder="Enter PhP amount here"
                ref="amt"
                className = "form-control"
              />
          </div>
            <button onClick={this.deposit}>Deposit</button>
            <button onClick={this.withdraw}>Withdraw</button>
        </form>

      </div>
    )
  }
}

export default Transaction;
