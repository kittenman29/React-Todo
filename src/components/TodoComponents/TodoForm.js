import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        task: '',
      };
    }
    render(props) {
      return (
        <React.Fragment>
        <form 
          className="input-box"
          type="text"
          value={props.task}
          name="task" 
          onClick={props.listTask}
          placeholder=""
          >
          {this.state.task}
        </form>
        <button type="submit">Add Task</button>
        <button type="click">Clear All</button>
        </React.Fragment>
      );
    }
  }

// export default TodoForm;