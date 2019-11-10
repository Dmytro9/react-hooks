import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      };

    case 'decrement':
      return {
        count: state.count - 1
      };

    case 'reset':
      return initialState;

    default:
      return initialState;
  }
}

export default function Todo({ username }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(UserContext);

  return (
    <>
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}
