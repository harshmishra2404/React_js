import React from 'react'
import Card from './components/Card'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div>
      <h1>Hello from Components</h1>
      <div className="card">
        <h1>Harsh Mishra</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deleniti.</p>
        {Card2()}
      </div>
      <div className="card">
        <h1>Harsh Mishra</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deleniti.</p>
        {Card()}
      </div>

      <div className='Components'>
        <Card/>
        <Card2/>
        <Navbar/>
      </div>
      
    </div>
  )
}

export default App
