import React from 'react';

const TodoForm = props => {
    return (
      <form addTodo={props.addItem}>
        <input
          type="text"
          value={props.task}
          name="task"
          addTodo={props.renderChanges}
          placeholder="...todo"
        />
        <button type="submit">Add Task</button>
        <button type="submit">Clear All</button>
      </form>
    );
  };



export default TodoForm;