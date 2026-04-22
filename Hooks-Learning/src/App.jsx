import React, { useState } from 'react'

const App = () => {
  const [Count, setCount] = useState(0);
  function Increase() {
    setCount(Count + 1);
  }
  function Decrease() {
    setCount(Count - 1);
  }

  function IncreaseByFour() {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  function DecreaseByFour() {
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
  }

  function MultiplicationByFour() {
    setCount(Count => Count * 4)
  }

  function Zero() {
    setCount(Count => Count * 0)
  }

  const [color, setColor] = useState('red')
  function ChangeBlue(){
    setColor('Blue')
  }
  function ChangeOrange(){
    setColor('Orange')
  }

  const [brand1 , setBrand] = useState('Ferrari')
  function changeBrand(){
    setBrand('Toyota')
    console.log("Change Brand is Called")
  }



  const [Car , setCar] = useState({
    Brand2 : "Ferrari",
     Model : "La Ferrari" , 
     year : "2019", 
     color: "Red"
  })
  function changeModel(){
    setCar((prev)=>{
      return{...prev , Model:"Enzzo"}
    })
    console.log("Change Model is Called")
  }
  function changeYear(){
    setCar((prev)=>{
      return{...prev, year : "2025"}
    })
  }
  function changeColor(){
    setCar((prev)=>{
      return {...prev, color:'Orange'}
    })
  }

  return (
    <div style={{ margin: '30px' }}>
      <h1>Hooks</h1>
      <h3>State Hooks</h3>
      <h2>{Count}</h2>
      <div style={{ display: 'flex', backgroundColor: 'red', height: '200px', width: '220px', alignItems: 'center' }}>
        <button onClick={Increase} style={{ height: '60px', width: '80px', margin: '20px' }}>Increase</button>
        <button onClick={Decrease} style={{ height: '60px', width: '80px', margin: '20px' }}>Decrease</button>
      </div>
      <div style={{ margin: '10px' }}>
        <button onClick={IncreaseByFour} style={{ padding: '20px', margin: '20px' }}>Increase By Four </button>
        <button onClick={DecreaseByFour} style={{ padding: '20px', margin: '20px' }} >Decrease By Four</button>
        <button onClick={MultiplicationByFour} style={{ padding: '20px', margin: '20px' }} >Multiplication By Four</button>
        <button onClick={Zero} style={{ padding: '20px', margin: '20px' }} >Set Zero</button>
      </div>



      <div>
        <h1>My {brand1} is {color}</h1>
        <button onClick={ChangeBlue}>Change to Blue</button>
        <button onClick={ChangeOrange}>Change to Orange</button>
        <button onClick={changeBrand}>Change To Toyota</button>
      </div>




      <div>
        <h1>
          My Ferrari
        </h1>
        <h3>
          I want Ferrari <span style={{color:'orange'}}>{Car.Model}</span> and it's production in <span style={{color:'red'}}>{Car.year}</span> the color is <span style={{color:'palegreen'}}>{Car.color}</span>
        </h3>
        <button onClick={changeModel}> Change Model Name to Enzzo </button>
        <button onClick={changeYear}>year</button>
        <button onClick={changeColor}>change to Orange</button>
        
      </div>
    </div>
  )
}

export default App