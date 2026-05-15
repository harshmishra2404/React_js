import React, { useState } from 'react'

const Card2 = (props) => {
  const [count, setCount] = useState(0);
  function Increase() {
    setCount(count + 1);
    console.log(count)
  }
  return (
    <div className='Cards3'>
      <h1>{count}</h1>
      <h1>{props.Name}</h1>
      <p>Description</p>
      <button onClick={Increase}>Increment</button>
    </div>
  )
}

export default Card2