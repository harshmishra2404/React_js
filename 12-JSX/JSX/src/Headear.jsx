import React from 'react'

const Headear = ({title,Elem}) => {
  return (
    <div>
        <h1 style={{
            backgroundColor:'yellow',
            color:'black',
            height:'40px',
            padding:'30px',
            alignItems:'center'
        }}>Hello from Headear {title}</h1>
        <h1 style={{backgroundColor:'blue',color:'white'}}>{Elem}</h1>
    </div>
  )
}

export default Headear