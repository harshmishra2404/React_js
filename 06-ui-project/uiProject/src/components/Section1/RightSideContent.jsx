import React from 'react'
import RightCard from './RightCard'

const RightSideContent = (props) => {
  return (
    <div id='right' className=' flex rounded-4xl overflow-x-auto flex-nowrap gap-5 h-full w-2/3 p-5' >
       {props.users.map(function(elem,idx){
        return <RightCard key = {idx} color = {elem.color} id = {idx} image = {elem.img} tag = {elem.tag}/>
       })}
    </div>
  )
}

export default RightSideContent