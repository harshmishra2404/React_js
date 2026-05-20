import React from 'react'

const Header = (props) => {
    return (

        <div className='bg-blue-300 py-5'>
            <header className='flex justify-between items-center text-4xl p-5 m-auto text-black/80 max-w-240 '>

                <h1 className='text-3xl'>
                    <span className='text-red-600 font-extrabold '>B</span>rand
                </h1>

                <div className='flex gap-8  items-center '>
                    <a href="">Features</a>
                    <a href="">Use Case</a>
                    <a href="">Integration</a>
                    <a href="">Portfolio</a>
                </div>

                <button className='bg-blue-500 px-3 py-2 rounded-2xl'>
                    {props.title}
                </button>

            </header>
        </div>

    )
}

export default Header