import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <div>
          Welcome {this.props.name}
      </div>
    );
  }
}

export default Welcome;
