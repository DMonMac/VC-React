import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Item extends Component {
  render(){
    return (
      <div className="col col-md-3 col-xs-12">
        <div className="thumbnail">
          <button>
            <img
              src={process.env.PUBLIC_URL + 'img/img'+ this.props.img_id +'.png'}
              alt="Item Image"
              width="100px"
              height="100px"
            />
          </button>
        </div>

        <div className="caption">
          <h5>{this.props.name}</h5>
          <p>Price: ${this.props.price}</p>
          <p>Qty: {this.props.qty}</p>
        </div>
      </div>
    )
  }
}

//class List extends Component {
//  render(){
//    return (
//      <div>

//      </div>
//    )
//  }
//}

class Breakdown extends Component {
  render(){

    return (
          <div>
            <button>-</button>
            {this.props.name} ({this.props.qty}) = $ {this.props.price*this.props.qty}
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
        {name: "Andrew Lloyd", price: 213, img_id: "01", qty: 1},
        {name: "eyeFone Ate", price: 1234, img_id: "02", qty: 0},
        {name: "Sam Tsung", price: 123, img_id: "03", qty: 2},
        {name: "CopyKo", price: 12, img_id: "04", qty: 0},
        {name: "Cher", price: 142, img_id: "05", qty: 3}
      ],
    };
    this.calcTotal = this.calcTotal.bind(this);
  }

  calcTotal(price) {
    this.setState({price_total: this.state.price_total + price});
  }


  render() {
    var func = this;
    var item_buttons = this.state.item_db.map(
      function(item){
        return(
          <Item
            name = {item.name}
            price = {item.price}
            img_id = {item.img_id}
            qty = {item.qty}
            calcTotal = {func.calcTotal}
          />
        );
      }
    );
    var item_breakdown = this.state.item_db.map(
      function(item){
        if (item.qty > 0) {
          func.calcTotal(item.qty*item.price)
          return(
            <Breakdown
              name = {item.name}
              price = {item.price}
              qty = {item.qty}
            />
          );
        }
      }
    );
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
            {item_breakdown}
            <h4>Total: $ {this.state.price_total}</h4>
          </div>
          <div className="col-8">
            <h3>Item List</h3>
            <div className = "row">
              {item_buttons}

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
