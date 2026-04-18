import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div  className='h-full w-80 overflow-hidden shrink-0 relative bg-red-600 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.image} alt="Working men" />
        <RightCardContent id = {props.id} tag = {props.tag} color = {props.color}/>
    </div>
  )
}

export default RightCard