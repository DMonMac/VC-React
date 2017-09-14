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
        <img
          src={process.env.PUBLIC_URL + 'img/img'+ this.props.img_id +'.png'}
          class="img-thumbnail"
          alt="Item Image"
          width="150"
          height="150"
        />
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
        <h4>Breakdown:</h4>
        <p>Total price: ${this.props.price_total}</p>
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
        {name: "Andrew Lloyd", price: 213, img_id: "01"},
        {name: "eyeFone Ate", price: 1234, img_id: "02"},
        {name: "Sam Tsung", price: 123, img_id: "03"},
        {name: "CopyKo", price: 12, img_id: "04"},
        {name: "Cher", price: 142, img_id: "05"}
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
            img_id = {item.img_id}
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
        <div className="jumbotron-fluid">
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
