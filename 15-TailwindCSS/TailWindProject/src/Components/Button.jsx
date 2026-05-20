import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className='bg-blue-500 px-3 py-2 rounded-2xl'>
                {props.title}
            </button>

        </div>
    )
}

export default Button