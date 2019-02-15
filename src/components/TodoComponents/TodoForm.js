import React from 'react';
/* 10. Build a form with an input. Import/export it appropriately */
/* 11. Add the piece of state that is going to control the input and pass it into the input function*/
/* 12. Add a function to handle the changes of the form input*/
/* 13. Call the function whenever there is a change on the input*/
/* 14. Define a function in a parent component and pass it down to the child component via a callback function
       invoke the callback function and pass it on */



class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: '',
    }
  }

  renderStateChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={e => this.props.addTaskObject(e, this.state.banana)}>
        <input type='text' value={this.state.banana} name='banana' onChange={this.renderStateChanges} />
      <button>Add Task</button>
      <button>Clear All</button>
      </form>
    );
  }
}


export default TodoForm;