import React, { Component } from 'react';

const url = breed => `https://dog.ceo/api/breed/${breed}/images/random`

class API extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

    fetch(url(this.props.breed))
      .then(d => d.json())
      .then(d => {
        this.setState({
          breedData: d
        });
      });
  };

  render() {
    if(!this.state.breedData) return <p>Pls wait...</p>
    return (
      <div>
        <h1>{this.props.breed}</h1>
        <img
          src={this.state.breedData.message}
          alt={this.props.breed}
          width=""
          height=""
        />
      </div>
    );
  }
}

export default API;
