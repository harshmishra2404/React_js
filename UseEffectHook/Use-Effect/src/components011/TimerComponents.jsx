import React, { useEffect, useState } from 'react'

const TimerComponents = () => {
    const [sec , setSec] = useState(0);
    function timerStart(){
        setSec(sec + 1)
    }
    useEffect(()=>{
        const Timer = setInterval(()=>{
            setSec(prev => prev + 1);
            console.log("Running ....")
        },1000);
        return ()=>{
            console.log("TimerComponents Unmount")
            clearInterval(Timer);
        }
    },[])
  return (
    <div>
        <h1>
            Seconds : {sec}
        </h1>
        <button onClick={timerStart}>
            start 
        </button>
    </div>
  )
}

export default TimerComponents