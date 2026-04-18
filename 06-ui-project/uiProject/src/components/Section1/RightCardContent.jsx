import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
    console.log(props.color)
    return (
        <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-15 w-15 flex justify-center items-center'>{props.id+1}</h2>
            <p className='text-lg text-shadow-2xs leading-relex text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae temporibus, ab consectetur nihil odit.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-3 rounded-full'> <ArrowRight /></button>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
            </div>
        </div>
    )
}

export default RightCardContent