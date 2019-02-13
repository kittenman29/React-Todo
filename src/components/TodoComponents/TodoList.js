// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './components/TodoComponents/Todo'

class TodoList extends React.Component {
    constructor() {
      super();
      this.state = {
        tasks: tasks,
        task: '',
        id: '',
        completed: '',
      };
    }
  
    render() {
        return (
        <div className='todo-list'>
            {this.state.tasks.map((tasksFromMap, index) => (
            <Todo key={index} task={tasksFromMap} />
            ))}
        </div>
        );
    }
}

export default TodoList;