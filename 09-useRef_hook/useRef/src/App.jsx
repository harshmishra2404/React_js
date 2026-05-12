import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  useEffect(() => {
    console.log("Use Effect")
  }, [])
  function Increase() {
    countRef.current = countRef.current + 1;
    console.log("Count :- ", countRef.current)
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
    </div>
  )
}

export default App