import React, { useContext } from 'react';
import axios from 'axios';
import TodosContext from '../context';

export default function TodosList() {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <div>
      <h1>{state.todos.length} Todos</h1>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span
              onDoubleClick={async () => {
                const response = await axios.patch(
                  `https://hooks-api.dpoliuliuk.now.sh/todos/${todo.id}`,
                  {
                    complete: !todo.complete
                  }
                );
                dispatch({ type: 'TOGGLE_TODO', payload: response.data });
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
              }
            >
              Edit
            </button>
            <button
              onClick={async () => {
                await axios.delete(
                  `https://hooks-api.dpoliuliuk.now.sh/todos/${todo.id}`
                );
                dispatch({ type: 'REMOVE_TODO', payload: todo });
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
