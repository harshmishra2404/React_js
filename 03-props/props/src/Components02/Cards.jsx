import React from 'react'

const Cards = (props) => {
    return (
        <div>
            <div className="parent">
                <div className="card">
                    <h1 color='red'>Hello I am {props.users}</h1>
                    <h3 color='yellow'>my age is {props.age}</h3>
                    <img src={props.image} alt="image" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, expedita.</p>
                    <button>View Results</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
