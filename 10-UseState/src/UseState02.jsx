import React, { useState } from 'react'

const UseState02 = () => {
  const [count, setcount] = useState(1)
  function increase() {
    setcount(count + 1);
    console.log("Count :- ", count)
  }


  const [name, nameChnge] = useState("Rajesh")
  function NameChange() {
    nameChnge("Harsh")
  }

  const [Name, setname] = useState({ User: 'Harsh', age: 25 })
  function changeName(prev) {
    const newName = { ...Name }
    newName.User = "MishraJi"
    newName.age = "34"
      console.log(newName)
    setname(prev=>({...prev,address:"Mumbai",Country:"India"}))
  }

  const [Arrya, setArrya] = useState([10, 20, 30, 40])
  function buttonClicked() {
    const newArr = [...Arrya]
    newArr.push( 900)
    setArrya(newArr)
  }





  return (
    <div>
      <h1>Value of a is {count}</h1>
      <button onClick={increase}>
        Click
      </button>


      <h1>Name of The EM:- {name}</h1>
      <button onClick={NameChange}>Change the Name</button>

      <h1>Name :- {Name.User} {Name.age} {Name.Country} {Name.address} </h1>
      <button onClick={changeName}>Click to change Name</button>

      <h1>Array :- {Arrya}</h1>
      <button onClick={buttonClicked}>Clicked Button to Update</button>




    </div>
  )
}

export default UseState02