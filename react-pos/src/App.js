import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {qty:0};
  }

  changeQty(ctr){
    if (this.state.qty === 0){
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
        <p>{this.props.name} = ${this.props.price}</p>
        Qty: {this.state.qty}
        <br/>
        <button onClick={ this.changeQty.bind(this, 1) }>+</button>
        <button onClick={ this.changeQty.bind(this, -1) }>-</button>
      </div>
    )
  }
}

class ItemList extends Component {
  constructor(props){
    super(props);
    this.state={
      total:0,
      item_db: [
        {name: "Andooroid", price: 213},
        {name: "eyeFone Ate", price: 1234},
        {name: "SomeSung", price: 123},
        {name: "CopyKo", price: 12},
        {name: "Share", price: 142}
      ]
    };
  }

  render() {
    var items = this.state.item_db.map(
      function(item){
        return(
          <Item
            name = {item.name}
            price = {item.price}
          />
        );
      }
    );
    return(
      <div>
        {items}
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
          App that computes your expenses for you ;)
        </p>

        <ItemList/>

      </div>
    );
  }
}

export default App;
