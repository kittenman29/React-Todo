import React from 'react';



class Todo extends React.Component {
    render() {
        return (
            <div className="todo-list">
                {this.props.task}
            </div>
        );
    }
}

export default Todo;