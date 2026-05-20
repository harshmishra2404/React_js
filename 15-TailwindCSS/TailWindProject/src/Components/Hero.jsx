import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div>
            <div className='max-w-220 m-auto text-center py-32'>

                <h1 className='text-8xl font-serif  '>The Best way to <span className='text-9xl bg-white-400 text-red-600 rounded-4xl font-extrabold px-3'>Review</span> Creative Assets  </h1>

                <p className='text-lg my-7 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus praesentium hic deserunt. Aliquid cum, fugit quasi assumenda aut maiores.
                </p>

                <div className='text-3xl'>
                    <Button title="Join Subscrption" />
                </div>

            </div>
        </div>
    )
}

export default Hero