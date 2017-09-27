import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  //addTask() {
  //  console.log('Should add task')
  //}

  updateText(event) {
    //console.log('updateText')
    //console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  clearToDoField() {
    this.props.addNewToDoFunc(this.state.text)
    this.setState({
      text:''
    })
  }

  render() {
    return (
      <div>
        <h2>To Do Form</h2>
        <input
          onChange={(event) => this.updateText(event)}
          value={this.state.text}
        />
        <button onClick={() => this.clearToDoField()}>Add Task</button>
      </div>
    );
  }
}

export default ToDoForm;
