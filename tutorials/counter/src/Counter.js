import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }

  add() {
    console.log('Added 1')
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
          <h2>Counter component</h2>
          <h3>{this.state.count}</h3>
          <button onClick={() => this.add()}>ADD</button>

      </div>
    );
  }
}

export default Counter;

// or: onClick={this.add.bind(this)}
