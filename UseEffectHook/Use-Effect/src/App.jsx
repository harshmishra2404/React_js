import React, { useEffect, useState } from 'react'
import TimerComponents from './components011/TimerComponents';
import ResizeWindow from './components011/ResizeWindow';

const App = () => {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(2);
  // function Count() {
  //   setCount(count + 1);
  // }
  // function Total() {
  //   setTotal(total + 2);
  // }
  // function increaseBy4() {
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)
  // }



    /*
  Code	When it Runs
  useEffect(() => {}, [])	Only once (on mount)
  useEffect(() => {})	Every render
  useEffect(() => {}, [count])	When count changes

    1. No dependency → runs every render
    2. [] → runs once (on mount)
    3. [value] → runs when value changes
   */
  // useEffect(() => {
  //   console.log("Run on Each Render");    // this Effect will Runs after every render
  //   alert("Render 1")
  // })

  // useEffect(() => {
  //   console.log("Run Once ", count)        // Runs only once after first render
  //   alert("Render 2")
  // }, [])

  // useEffect(() => {
  //   console.log("Run on every Count Change : ", count)      // this Effect will Runs after first render AND every time count changes
  //   alert("Render 3")
  // }, [count])





  // Multiple Dependence:-
  /*
    [total, count] means:
  ✔ Run on first render
  ✔ Run when total changes
  ✔ Run when count changes
  ❌ Not run otherwise
   */
  // useEffect(() => {
  //   console.log("Total : ", total)
  //   alert("run everyTime on count/Total")

  // }, [total, count])




  // useEffect(() => {
  //   console.log("Effect , count : ", count);
  //   return () => {
  //     console.log("Clean up , count : ", count);
  //   }
  // }, [count]) // depends on count



  return (
    <div>
      {/* <h1>Use Effect </h1>
      <div>
        <h2>{count}</h2>
        <button onClick={Count}>Count </button>
      </div>
      <div>
        <h2>{total}</h2>
        <button onClick={Total}>Total </button>
      </div> */}




        {/* <TimerComponents /> */}
        {/* <ResizeWindow/> */}



    </div>
  )
}

export default App