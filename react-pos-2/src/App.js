import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Item extends Component {
  render(){
    return (
      <div className="col col-md-3 col-xs-12">
        <button>Item Image</button>
        <div>
          Price: $
        </div>
      </div>
    )
  }
}

class List extends Component {
  render(){
    return (
      <div>
      <Item/>
      </div>
    )
  }
}

class Breakdown extends Component {
  render(){
    return (
      <div>
      Item Name (Qty) = $ Price <button>-</button>
      <h4>Total: $ Total Price</h4>
      </div>
    )
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      price_total:0,
      item_db: [
        {name: "Andrew Lloyd", price: 213, img_id: "01", qty: 0},
        {name: "eyeFone Ate", price: 1234, img_id: "02", qty: 0},
        {name: "Sam Tsung", price: 123, img_id: "03", qty: 0},
        {name: "CopyKo", price: 12, img_id: "04", qty: 0},
        {name: "Cher", price: 142, img_id: "05", qty: 0}
      ]
    };
    this.calcTotal = this.calcTotal.bind(this);
  }

  calcTotal(price) {
    this.setState({price_total: this.state.price_total + price});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React POS</h2>
          <p>
            App that computes your expenses for you ;)
          <br/><br/>
          </p>
        </div>

        <div className="row">
          <div className="col-4">
            <h3>Breakdown</h3>
            <Breakdown/>
          </div>
          <div className="col-8">
            <h3>Item List</h3>
            <div className = "row">
              <List/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
