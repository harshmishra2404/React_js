import React from 'react'
import LeftSideTop from './LeftSideTop';
import LeftSideBottom from './LeftSideBottom';

const LeftSideContent = () => {
  return (
    <div className=' h-full w-1/3 gap-10 flex flex-col  justify-between '>
      <LeftSideTop/>
      <LeftSideBottom/>
    </div>
  )
}

export default LeftSideContent