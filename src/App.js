import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  addTask = e => {
    e.preventDefault();
    console.log(e.target);
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: '',
      id: '',
      completed: '',
    });
  };

  renderChanges = e => {
    console.log(e.target.value);
    //     this.setState({ name: e.target.value })
    this.setState({
      [e.target.task]: e.target.value
    });
  };
  
  render() {
    return (
      <div>
        <h2>Todo List</h2>
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
