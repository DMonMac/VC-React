import React, { Component } from 'react';

const breedsURL = breed => `https://dog.ceo/api/breeds/list` // This should be rendering JSON ready files

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
  };



  showImg(){
    return (
      <div>
        <h2>{this.state.breed}</h2>
        <img
          src={this.state.breedImgData.message}
          alt="Breed not available.."
          width=""
          height=""
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          <h1>Dog API</h1>
        </div>
        <div>
          <form onSubmit={this.submit}>
            <input type ="text" placeholder="Enter breed here" ref="breed"/><br/>
            <button>Submit Breed (Click again for another image)</button>
          </form>
          {this.showImg()}
        </div>
      </div>
    );
  }
}

export default DogAPI;
