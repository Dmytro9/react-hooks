import React, { useContext } from 'react';
import { UserContext } from './index';


export default function Todo({username}) {
  return (
    <>
      <div 
        username={username}>
        <UserContext.Consumer>  
          {value => <div>Hello, {value}</div>}
        </UserContext.Consumer>  
      </div>
      {username}
    </>
  )
}