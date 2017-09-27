import React, { Component } from 'react';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ul>
          {this.props.todo_data.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default ToDoList;

// keys  help react to call the correct element
