import React, { useContext } from 'react';
import { UserContext } from './index';


export default function Todo({username}) {

  const value = useContext(UserContext);

  return (
    <>
      <div>
        Hello, {value}
      </div>
    </>
  )
}