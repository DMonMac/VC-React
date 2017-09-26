import React, { Component } from 'react';

//const url = breed => `https://dog.ceo/api/breed/${breed}/images/random` // This should be rendering JSON ready files

class DogAPI extends Component {
  constructor(props){
    super(props)
    this.state = {
      breed: "",
      breedData: {}
    }
    this.submit = this.submit.bind(this);
  }

  submit(event){
    event.preventDefault();
    this.setState({breed: this.refs.breed.value})
    let url = `https://dog.ceo/api/breed/${this.refs.breed.value}/images/random`
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          breedData: data
        })
      })
    if(!this.state.breedData) return <p>Pls wait...</p>
  };

  render() {
    return (
      <div>
        <h1>Dog API</h1>
        <form onSubmit={this.submit}>
          <input type ="text" placeholder="Enter breed here" ref="breed"/><br/>
          <button>Submit Breed (Click again for another image)</button>
        </form>
        <div>
          <h2>{this.state.breed}</h2>
          <img
            src={this.state.breedData.message}
            alt="Breed not available.."
            width=""
            height=""
          />
        </div>
      </div>
    );
  }
}

export default DogAPI;
