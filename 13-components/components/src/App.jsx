import React from 'react'
import Card from './Components/Card'
import Card4 from './Components/Card4'
import './App.css'

function Card2(props) {
  console.log(props)
  return (
    <div className='square'>
      <h1>Hello from Square 3</h1>
      <h2>{props.name}</h2>
      <h2>{props.surname}</h2>
      <h2>{props.age}</h2>
    </div>
  )
}

const App = () => {
  const Name = [
    "Emma",
    "Sophia",
    "Liam",
    "Noah",
    "Olivia",
    "James",
    "Lucas",
    "Mia",
    "Charlotte",
    "Ethan"
  ]

  const users = [
    { Name: "Harsh", Surname: "Mishra", age: "Age is 25" },
    { Name: "Robert", Surname: "Lee", age: "Age is 20" },
    { Name: "William", Surname: "Clark", age: "Age is 32" },
    { Name: "Joseph", Surname: "Walker", age: "Age is 24" },
    { Name: "Ethan", Surname: "Hall", age: "Age is 22" },
    { Name: "Noah", Surname: "Allen", age: "Age is 27" },
    { Name: "Liam", Surname: "Young", age: "Age is 26" },
    { Name: "Mason", Surname: "King", age: "Age is 28" },
    { Name: "Lucas", Surname: "Scott", age: "Age is 23" },
    { Name: "Aiden", Surname: "Green", age: "Age is 21" }
  ]


  return (
    <div>
      <div>
        <Card />
      </div>
      <div style={{ display: 'flex', margin: '20px', padding: '20px', gap: '10px', overflowY: 'auto', scrollbarWidth: 'none' }}>
        {
          users.map((user, indx) => {
            return <Card2 name={user.Name} surname={user.Surname} age={user.age} key={indx} />
          })
        }
      </div>
      <div>
        {Card2(
          {
            Name: 'Rahul',
            Surname: 'Mishra',
            age: ' age is 46'
          }
        )}
      </div>

      <div className='cards04'>

        {
          Name.map((Name, index) => {
            return <Card4 Name={Name} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default App