import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {}
    }
    //this.callAPIjson = this.callAPIjson.bind(this);
  }

  componentDidMount(){ // note: if you add () it executes the function, without it it copies the cintent into the return
    let url = "http://api.demo.muulla.com/cms/merchant/all/active/10/1"
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY'
      }
    })
      .then(api => api.json())
      .then(apiJSON => {
        this.setState({
          apiData: apiJSON
        })
        console.log(this.state.apiData)
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Authorized API</h1>
        </header>
      </div>
    );
  }
}

export default App;

//{this.callAPIjson()}
//{console.log(this.state.apiData)}
