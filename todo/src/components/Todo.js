import React from 'react';

const Todo = props => {
    const toggleComplete = item => {
        props.reducer({ type: "TOGGLE_COMPLETE", payload: item});
    };

    return (
        <div className="todo">
            <p className={props.item.completed ? 'completed' : ''} 
                onClick={() => toggleComplete(props.item)}>
                {props.item.task}
            </p>

        </div>
    );
};

export default Todo;