import React from 'react';

/* 9. Make a new component and pass in props from the TodoList aka banana={} */


const Todo = props => {
    return (
        <div 
        className={`banana${props.banana.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTask(props.banana.id)} 
        >
            <p>{props.banana.task}</p>
        </div>
    );
}


export default Todo;