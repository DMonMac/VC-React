import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
      data: []
    }
    //this.callAPIjson = this.callAPIjson.bind(this);
  }

  componentWillMount(){ // note: if you add () it executes the function, without it it copies the cintent into the return
    let url = "http://api.demo.muulla.com/cms/merchant/all/active/10/1"
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY'
      }
    })
      .then(api => api.json())
      .then(apiJSON => {
        this.setState(
          { apiData: apiJSON }, () => {
            this.setState(
              { data: this.state.apiData.data }
            )
          }
        )

      });
  }

  render() {
    console.log(this.state.apiData)
    let data_list = this.state.data.map((datum, index) => {
      return (
        <tr key={index}>
          <img src={datum.logo.path_to_file} alt='No Logo'/>
          <td>{datum.display_name}</td>
          <td>{datum.email}</td>
          <td>{datum.phone}</td>
          <td>{datum.status}</td>
          <td>
            <ol>
              <li>{datum.address.address1}</li>
              <li>{datum.address.address2}</li>
              <li>{datum.address.address3}</li>
            </ol>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Authorized API</h1>
          </header>
        </div>
        <table >
          <tr>
            <th><h2>Image</h2></th>
            <th><h2>Display Name</h2></th>
            <th><h2>Email</h2></th>
            <th><h2>Phone</h2></th>
            <th><h2>Status</h2></th>
            <th><h2>Address</h2></th>
          </tr>
          {data_list}
        </table>

      </div>

    );
  }
}

export default App;
