import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm.js';
import ToDoList from './ToDoList.js';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoForm/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
