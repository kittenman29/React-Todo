import React from 'react';
import { isBoolean } from 'util';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const taskObjects = [
  {
      task: 'clean',
      id: Date.now(),
      completed: false,
  },
  {
      task: 'mop',
      id: Date.now(),
      completed: false,
  },
  {
      task: 'nap',
      id: Date.now(),
      completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskObjects: taskObjects,
      task: '',
      id: '',
      completed: isBoolean,
    };
  }
  
    addTask = e => {
      e.preventDefault();
      const newTask = {
        task: this.state.task,
        id: this.state.id,
        completed: this.state.completed,
      };
      this.setState({
        taskObjects: [...this.state.taskObjects, newTask],
        task: '',
        id: '',
        completed: isBoolean,
      });
    };

    listTask = e => {
      this.setState({
        [e.target.task]: e.target.value
      });
    };

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList  />
        <TodoForm 
        addTask={this.addTask}
        task={this.state.task}
        listTask={this.listTask}
        id={this.state.id}
        completed={this.state.completed}
        />
      </div>
    );
  }
}

export default App;


