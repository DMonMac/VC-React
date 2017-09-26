import React, { Component } from 'react';

//const url = breed => `https://dog.ceo/api/breed/${breed}/images/random` // This should be rendering JSON ready files

class DogAPI extends Component {
  constructor(props){
    super(props)
    this.state = {
      breed: "",
      breedImgData: {}
    }
    this.submit = this.submit.bind(this);
  }

  submit(event){
    event.preventDefault();
    this.setState({breed: this.refs.breed.value})
    let imgURL = `https://dog.ceo/api/breed/${this.refs.breed.value}/images/random`
    fetch(imgURL)
      .then(imgData => imgData.json())
      .then(imgData => {
        this.setState({
          breedImgData: imgData
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
            src={this.state.breedImgData.message}
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
