import React, { Component } from 'react';
import './App.css';
import ToDoForm from './Components/ToDo/ToDoForm.js';
import ToDoList from './Components/ToDo//ToDoList.js';
//import ToDoSearch from './Components/ToDo//ToDoSearch.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['eat', 'drink', 'play', 'sleep', 'wake up'],
      text: '',
      filtered: ['eat', 'drink', 'play', 'sleep', 'wake up'],
    }
    this.searchToDo = this.searchToDo.bind(this);
  }

  searchToDo(event) {
    this.setState({
      text: event.target.value
    })
    console.log(this.state.text)
    const filterItems = (query) => {
      return this.state.todos.filter((el) =>
      el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

//  console.log(filterItems(this.state.text));
  this.setState({
    filtered: filterItems(this.state.text)
  })
  console.log((this.state.filtered));
}

  addNewToDo(todo){
    console.log(todo)
    this.setState({
      todos: this.state.todos.concat(todo),
      filtered: this.state.filtered.concat(todo)
    })
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <h2>Search To Do</h2>
        <input
          onChange={(event) => this.searchToDo(event)}
          value={this.state.text}
        />
        <ToDoForm
          addNewToDoFunc = {this.addNewToDo.bind(this)}
        />
        <ToDoList
          todo_data={this.state.filtered}

        />
      </div>
    );
  }
}

export default App;

// adding () activate function, without it it renders the function...
