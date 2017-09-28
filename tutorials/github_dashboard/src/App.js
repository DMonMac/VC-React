import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './Components/PlayerProfile';
import { Row, Col, Button } from 'react-materialize';
import Judge from './Components/Judge';



class App extends Component {
  // Init
  constructor(props) {
    super(props);
    this.state = {
      player1: {},
      player2: {}
    }
  }

  searchPlayer(player_number){
    console.log(player_number)

    var username;

    if (player_number == 1) {
      username = this.player1Input.value
    } else {
      username = this.player2Input.value
    }

    fetch(`https://api.github.com/users/${username}`)
      .then(
        function(response){
          return response.json()
        }
      )
      .then(
        (response) => {
          if (player_number == 1) {
            this.setState({ player1: response })
          } else {
              this.setState({ player2: response })
            }
        }
      )
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h3>HubWars</h3>

        <Judge
          player1={this.state.player1}
          player2={this.state.player2}
        />

        <Row>
        	<Col s={12} m={6}>
            <input
              ref={(input) => {this.player1Input = input; }}
            />
            <Button waves='light' onClick={() => this.searchPlayer(1)}>Search</Button>
            <PlayerProfile player_data={this.state.player1} />
        	</Col>
          <Col s={12} m={6}>
            <input
              ref={(input) => {this.player2Input = input; }}
            />
            <Button waves='light' onClick={() => this.searchPlayer(2)}>Search</Button>
            <PlayerProfile player_data={this.state.player2} />
        	</Col>
        </Row>


      </div>
    );
  }
}

export default App;
//componentwillmount bef birth
//componentdidmount during?
