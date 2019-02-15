/* 5. Build out the component */
import React from 'react';
import Todo from './Todo'
import './Todo.css'

/* 7. Map over the component props */
/* 8. The Todo component takes in props of banana and returns banana 
if you add a custom attribute to a custom component, it gets passed in as props. in this case it's banana={} on the custom
component <Todo/> */

const TodoList = props => {
  return (
    <div className="mapped-todo-list">
      {props.taskObjects.map(banana => (
        <Todo 
        banana={banana} 
        toggleTask={props.toggleTask} 
        />
      ))}
    </div>
  );
}



export default TodoList;