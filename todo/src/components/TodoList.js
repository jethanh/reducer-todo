import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.state.todos.map(item => {
        return (
          <Todo item={item} key={item.id} reducer={props.reducer} />
        );
      })}
    </div>
  );
};

export default TodoList;