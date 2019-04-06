import React from 'react';
import { isBoolean } from 'util';



import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

{/* 1. Render some Objects */}
const taskObjects = [
  {
      task: 'clean',
      id: 123,
      completed: false,
  },
  {
      task: 'mop',
      id: 1234,
      completed: false,
  },
  {
      task: 'nap',
      id: 12345,
      completed: false,
  },
  {
    task: 'pick butt',
    id: 123456,
    completed: false,
},
]

/* 2. Add a Class Constructor Function */
/* 3. Pass in props of your object.  This is === taskObjects: taskObjects, */
/* 4. Render a component to display your list of objects. */
/* 5. Build out the component in a new file and import it here. */
/* 6. Pass down the props from the App component to the new component. */
/* 10. Build a form with an input. Import/export it appropriately */

/* 15.  1:10:00 mark */

/* 19.  start again 1:42:00 mark */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskObjects     
    };
  }

  addTaskObject = (e, banana) => {
    e.preventDefault();
    const newTaskObject = {
      task: banana,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      taskObjects: [...this.state.taskObjects, newTaskObject]
    });
  };

  toggleTask = bananaID => {
    this.setState({
      taskObjects: this.state.taskObjects.map(banana => {
        if (bananaID === banana.id) {
          return {...banana, completed: !banana.completed};
        }
        return banana;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      taskObjects: this.state.taskObjects.filter(banana => !banana.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm 
          addTaskObject={this.addTaskObject} 
          clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList 
        taskObjects={this.state.taskObjects} 
        toggleTask={this.toggleTask}
        />
        <button onClick={this.clearCompleted}>Clear All</button>  
      </div>
    );
  }
}

export default App;


