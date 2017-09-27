import React, { Component } from 'react';
import './App.css';
import ToDoForm from './Components/ToDo/ToDoForm.js';
import ToDoList from './Components/ToDo//ToDoList.js';
import ToDoSearch from './Components/ToDo//ToDoSearch.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['eat', 'drink', 'play', 'sleep', 'wake up']
    }
  }

  addNewToDo(todo){
    console.log(todo)
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ToDoSearch
        />
        <ToDoForm
          addNewToDoFunc = {this.addNewToDo.bind(this)}
        />
        <ToDoList
          todo_data={this.state.todos}

        />
      </div>
    );
  }
}

export default App;

// adding () activate function, without it it renders the function...
