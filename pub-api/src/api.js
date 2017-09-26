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

    submit(event) {
      event.preventDefault(); //prevents submit default (refresh, which resets everything)
      this.setState({breed: this.refs.breed.value})
      this.componentDidMount();
    }

  componentDidMount(){
    let url = `https://dog.ceo/api/breed/${this.state.breed}/images/random`
    fetch(url)
      .then(d => d.json())
      .then(d => {
        this.setState({
          breedData: d
        })
      })
  };

  render() {
    //if(!this.state.breedData) return <p>Pls wait...</p>
    return (
      <div>
        <h1>Dog API</h1>
        <form onSubmit={this.submit}>
          <input type ="text" placeholder="Works after pressing twice..." ref="breed"/>
          <button>Re-click for another image</button>
        </form>
        <div>
          <h2>{this.state.breed}</h2>
          <img
            src={this.state.breedData.message}
            alt="Breed not available..."
            width=""
            height=""
          />
        </div>
      </div>
    );
  }
}

export default DogAPI;
