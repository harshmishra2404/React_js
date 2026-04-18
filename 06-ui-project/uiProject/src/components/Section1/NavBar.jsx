import React from 'react'


const NavBar = () => {
    const handleClick = () => {
    alert("Button clicked!");
  }
  return (
    <div className='flex items-center justify-between px-5 py-10 '>
        This is NavBar
        <h4 className='bg-black text-white px-5 py-4 rounded-full uppercase'>Target Audience</h4>
        <button onClick={handleClick} className='bg-gray-400 px-6 py-2 uppercase rounded-full tracking-wider text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default NavBar