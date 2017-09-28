import React, { Component } from 'react';

class Judge extends Component {
  render() {
    var player1Ready = !!Object.keys(this.props.player1).length;
    var player2Ready = !!Object.keys(this.props.player2).length;
    var playersReady = player1Ready && player2Ready

    var result;
    if (this.props.player1.followers > this.props.player2.followers) {
      result = `${this.props.player1.name} wins!!!`
    } else if (this.props.player1.followers < this.props.player2.followers) {
        result = `${this.props.player2.name} wins!!!`
      } else {
          result = `It's a Tie!!!`
        }

    return (
      <div>
        <h5>Result: {playersReady? {result} : null}</h5>
      </div>
    );
  }
}

export default Judge;
