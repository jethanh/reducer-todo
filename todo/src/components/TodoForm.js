import React, { useState }  from 'react';


const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');
    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        props.reducer({ type: "ADD_TODO", payload: newTodo })
        setNewTodo('');
    };

    const clearCompleted = e => {
        e.preventDefault();
        props.reducer({ type: "CLEAR_COMPLETED" });
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input onChange={handleChanges}
                        type="text"
                        name="input"
                        value={newTodo}
                />
                <button onClick={addTodo}>Add</button>
                <button onClick={clearCompleted}>
                    clear completed
                </button>

            </form>
        </div>
    )
}

export default TodoForm;