import React, { Component } from 'react';
import './App.css';
import ToDoForm from './Components/ToDo/ToDoForm.js';
import ToDoList from './Components/ToDo//ToDoList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['eat', 'drink', 'play', 'sleep', 'wake up']
    }
  }
  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ToDoForm/>
        <ToDoList todo_data={this.state.todos}/>
      </div>
    );
  }
}

export default App;
