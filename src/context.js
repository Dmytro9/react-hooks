import React from 'react';

const TodosContext = React.createContext({
  todos: [
    // {
    //   id: 1,
    //   text: 'Eat breakfast',
    //   complete: false
    // },
    // { id: 2, text: 'Do laundery', complete: false },
    // { id: 3, text: 'Finiush project', complete: false }
  ],
  currentTodo: {}
});

export default TodosContext;
