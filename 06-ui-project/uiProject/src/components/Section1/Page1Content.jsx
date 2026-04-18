import React from 'react'
import LeftSideContent from './LeftSideContent'
import RightSideContent from './RightSideContent'

const Page1Content = (props) => {
  return (
    <div className=' pb-16 pt-5 gap-10 flex items-center justify-between h-[90vh] py-10 px-10 '>
      <LeftSideContent />
      <RightSideContent users={props.users} />
    </div>
  )
}

export default Page1Content