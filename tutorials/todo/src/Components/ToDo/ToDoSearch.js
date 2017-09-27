import React, { Component } from 'react';

class ToDoSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      filter: ''
    }

  }

  searchToDo(event) {
    this.setState({
      text: event.target.value
    })
    const filterItems = (query) => {
      return this.props.todo_data.filter((el) =>
      el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

  console.log(filterItems(this.state.text));
}


  render() {
    return (
      <div>
        <h2>Search To Do</h2>
        <input
          onChange={(event) => this.searchToDo(event)}
          value={this.state.text}
        />
      </div>
    );
  }
}

export default ToDoSearch;
