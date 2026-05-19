import React from 'react'
import Card from './Card'
import './App.css'

const App = () => {
  return (
    <div className='house'>
      <h1>
        I am the House (App Component)
      </h1>
      <p> To change the whole app/city rules, we make changes in index.css 🌍</p>
      <div className='Leader'>
        I am the Leader of this room only
        <br />
        <p>To change me, we make changes in App.css</p>
      </div>
      <Card />
    </div>
  )

}



export default App                              