import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
  constructor(props){
    super(props); //Makes it accessible globally.
    this.state = {qty:0}; // initial state
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
    this.minus = this.minus.bind(this);
  }
  buy(){
    this.setState({qty: this.state.qty+1});
    this.props.handleTotal(this.props.price);
    //alert("You are buying "+ this.props.name);
  }

  show(){
    this.props.handleShow(this.props.name);
  }

  minus(){
    this.setState({qty: this.state.qty -1});
    this.props.handleTotal(-this.props.price);
  }

  render() {
    return (
      <div>
        <p>{this.props.name} = ${this.props.price}</p>
          <button className="btn btn-primary" onClick={this.buy}>+</button>
          <button className="btn btn-primary" onClick={this.show}>Show</button>
          <button className="btn btn-primary" onClick={this.minus}>-</button>
          <h3>{this.state.qty}</h3>
          <h3>${this.state.qty*this.props.price}</h3>
          <hr/>
      </div>
    );
  }
}

class Total extends Component {
  render() {
    return (
      <div>
        <h3>Total balance: ${this.props.total}</h3>
      </div>
    )
  }
}

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault(); //prevents submit default (refresh, which resets everything)
    var product = {
      name:this.refs.name.value,
      price:parseInt(this.refs.price.value) || 0
    };
    this.props.handleCreate(product);
    alert("Added " + product.name);
    this.refs.name.value="";
    this.refs.price.value="";
  }
  render() {
    return(
      <form onSubmit={this.submit} class="form-group">
        <input className="form-control" type ="text" placeholder="Product Name" ref="name"/>
        <input className="form-control" type ="text" placeholder="Product Price" ref="price"/>
        <br/>
        <button className="btn btn-primary">Create Product</button>
      </form>
    );
  }
}

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state={
      total:0,
      productList: [
        {name: "Andooroid", price: 213},
        {name: "eyeFone Ate", price: 1234},
        {name: "SomeSung", price: 123},
        {name: "CopyKo", price: 12},
        {name: "Share", price: 142}
      ]
    };
    this.calcTotal = this.calcTotal.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  calcTotal(price) {
    this.setState({total: this.state.total + price});
  }

  showProduct(name){
    alert("You are buying "+ name);
  }

  createProduct(product) {
    this.setState({
      productList: this.state.productList.concat(product)
    });
  }

  render() {
    var component = this;
    var products = this.state.productList.map(
      function(prod){
        return(
          <Product
            name={prod.name}
            price={prod.price}
            handleShow={component.showProduct}
            handleTotal={component.calcTotal}
          />
        );
      }
    );

    return(
    <div>
      <ProductForm handleCreate = {this.createProduct}/>
      {products}
      <Total total={this.state.total}/>
    </div>
    )
  }
}



export default ProductList;
