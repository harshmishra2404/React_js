import React from 'react'
import Cards from './Components02/Cards'
const App = () => {
  return (
    <div className="cards">
      <Cards users="Rakesh Mishra" age={55} image="https://images.unsplash.com/photo-1560328055-e938bb2ed50a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmF0aGVyfGVufDB8fDB8fHww" />
      <Cards users="Harsh Mishra" age={25} image="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww" />
      <Cards users="Khushi Mishra" age={23} image="https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJvdGhlciUyMGFuZCUyMHNpc3RlcnxlbnwwfHwwfHx8MA%3D%3D" />
      <Cards users="Shashi Mishra" age={60} image="https://images.unsplash.com/photo-1560707854-fb9a10eeaace?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdGhlcnMlMjBkYXl8ZW58MHx8MHx8fDA%3D" />
    </div>
  )
}

export default App
