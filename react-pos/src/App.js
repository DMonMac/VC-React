import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {qty:0};
  }

  changeQty(ctr){
    if (this.state.qty === 0 && ctr<0){
        alert("You haven't added this item yet.");
    } else {
        this.setState({
          qty: this.state.qty + ctr
        });
        this.props.handleCalcTotal(this.props.price*ctr)
      }
  }

  render() {
    return (
      <div>
        <p>{this.props.name} = ${this.props.price}</p>
        Qty: {this.state.qty}
        <br/>
        <button onClick={ this.changeQty.bind(this, 1) }>+</button>
        <button onClick={ this.changeQty.bind(this, -1) }>-</button>
      </div>
    )
  }
}

class Breakdown extends Component {

  render() {
    return (
      <div>
        <h3>Total balance: ${this.props.price_total}</h3>
      </div>
    )
  }
}

class ItemList extends Component {
  constructor(props){
    super(props);
    this.state={
      price_total:0,
      item_db: [
        {name: "Andrew Lloyd", price: 213},
        {name: "eyeFone Ate", price: 1234},
        {name: "Sam Tsung", price: 123},
        {name: "CopyKo", price: 12},
        {name: "Cher", price: 142}
      ]
    };
    this.calcTotal = this.calcTotal.bind(this);
  }

  calcTotal(price) {
    this.setState({price_total: this.state.price_total + price});
  }

  render() {
    var item_list_component = this;
    var items = this.state.item_db.map(
      function(item){
        return(
          <Item
            name = {item.name}
            price = {item.price}
            handleCalcTotal = {item_list_component.calcTotal}
          />
        );
      }
    );
    return(
      <div>
        {items}
        <Breakdown

          price_total = {this.state.price_total}
        />

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
          <p>
            App that computes your expenses for you ;)
          <br/><br/>
          </p>

        </div>

        <ItemList/>

      </div>
    );
  }
}

export default App;
