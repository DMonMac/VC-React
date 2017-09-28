import React, { Component } from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

class PlayerProfile extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log(this.props.player1)
    return (
      <CardPanel className="teal lighten-4 black-text">
        <h4>{this.props.player_data.name}</h4>
        <img src={this.props.player_data.avatar_url} width='100%'/>
        <p>Location: {this.props.player_data.location}</p>
      </CardPanel>
    );
  }
}

export default PlayerProfile;
