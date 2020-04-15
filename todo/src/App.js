import React, { useReducer } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import { reducer, initialState } from './reducers/reducer';
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <TodoForm reducer={dispatch}/>
      <TodoList state={state} reducer={dispatch}/>
    </div>
  );
}

export default App;
