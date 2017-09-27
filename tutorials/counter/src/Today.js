import React, { Component } from 'react';

class Today extends Component {
  render() {
    return (
      <div>
          Today is {this.props.day}
      </div>
    );
  }
}

export default Today;
