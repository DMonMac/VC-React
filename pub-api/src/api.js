import React, { Component } from 'react';

const url = name => 'https://robohash.org/${name}'

class API extends Component {

  componentDidMount(){

    fetch(url(this.props.name))
      .then(d => d.json())
      .then(d => {
        this.setState({
          robohashData: d
        });
      });
  };

  render() {
    return (
      <div>
        <p>Loading...</p>
        <h1>ROBOHASH</h1>
        <ul id='robohashes'></ul>
      </div>
    );
  }
}

export default API;
