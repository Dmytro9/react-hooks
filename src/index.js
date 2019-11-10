import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './Login';
// import App from './Register';
// import App from './FetchApi';
import Todo from './Todo';
import * as serviceWorker from './serviceWorker';


export const UserContext = React.createContext();

const username = 'Dima';

ReactDOM.render(
  <UserContext.Provider value={username}>
  <Todo />
  </UserContext.Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
