// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
        <div className="todo-list">
          {this.props.taskObjects.map((tasksFromMap, task) => (
            <Todo key={task} task={tasksFromMap} />
          ))}
        </div>
        );
    }
}

export default TodoList;