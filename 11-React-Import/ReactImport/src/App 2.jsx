import './App.css'
import React from 'react'
import Header, { Export1, Header2, Header3, Header4, Header5, Export2, Export3, Export4, Export5 } from './Header'

import ReactLogo from './assets/react.svg' // this is the way we can Import the Images in Our projects. ReactLogo is the variable name we can access the image from anywhere in the code with the help of Variable 

const App = () => {
  return (
    <div>
      <h1 className='headings'>From App.jsx</h1>
      <div className='headear'>
        <Header />
        <Header2 />
        <Header3 />
        <Header4 />
      </div>
      <div className='export'>
        <Export1 />
        <Export2 />
        <Export3 />
        <Export4 />
        <Export5 />
      </div>
      <img src={ReactLogo}  alt="React Logo" /> 
    </div>
  )
}

export default App