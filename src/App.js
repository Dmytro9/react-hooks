import React, { useState, useEffect } from 'react';

const App = () => {

  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    document.title = `You have clicked ${count} times`
  });

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  return (
    <>
    <button onClick={incrementCount}>
      I was clicked {count} times
    </button>

    <h2>Total Light</h2>
    <img
      onClick={toggleLight}
      alt='Lightbulb'
      src={
        isOn ?
        'https://icon.now.sh/highlight/fd0' :
        'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px',
        cursor: 'pointer'
      }}
    />
    </>
  );
}

export default App;
