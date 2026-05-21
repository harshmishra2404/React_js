import React from 'react'

const App = () => {
  return (
    <div className='bg-pink-400 pt-20 pb-20 w-full  items-center'>
      <div className='w-400 mx-auto'>
        <div className='flex justify-between bg-blue-400 '>
          <div className=' flex px-10 my-10 text-3xl font-serif'>
            <span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtflxegKDZMblC4gtvXtJUiW_5yF74e0cEg&s" alt="Gemini Logo" className='w-9 rounded-2xl' />
            </span>
            Page
            <span className='font-extrabold text-3xl'>
              AI
            </span>
          </div>

          <div className=' flex gap-6 px-10 my-10 items-center'>
            <button className='hover:underline hover:bg-red-400 hover: rounded-2xl hover:p-3'>Pricing</button>
            <button className='hover:underline hover:bg-red-400 hover: rounded-2xl hover:p-3'>Components</button>
            <button className='hover:underline hover:bg-red-400 hover: rounded-2xl hover:p-3'>Blog</button>
            <button className='bg-gray-600 p-4 rounded-2xl text-white font-bold hover:bg-red-500 hover:underline'>Dashboard</button>
          </div>

        </div>


        <div className='flex justify-center bg-blue-900 text-white '>
          <div className='w-60 justify-center items-center flex  gap-2 -space-x-4' >
            <img src="https://images.unsplash.com/vector-1740737650825-1ce4f5377085?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="men photo" className='w-9  rounded-full' />
            <img src="https://media.istockphoto.com/id/1719332366/vector/avatar-of-senior-elderly-man-isolated.jpg?s=612x612&w=0&k=20&c=sbXu3EAQJa8OK-hCnrKzkwHZ8FJ7Fhpe10Z9aOpm_cI=" alt="men 2 photo" className='w-9 rounded-full ' />
            <img src="https://media.istockphoto.com/id/1854427380/vector/eyeglasses-bearded-asian-man-relaxed-standing-2d-vector-avatar-illustration.jpg?s=612x612&w=0&k=20&c=0-sTVkJJe4T8dGhNIRL_h3cTMpgFnJvuOuUiSxiikwk=" alt="men 3" className='w-9 rounded-full ' />
            <img src="https://media.istockphoto.com/id/1256010008/vector/illustration-of-a-stylish-hipster-avatar-of-a-man-in-a-tie-and-with-a-stylish-beard-mascot.jpg?s=612x612&w=0&k=20&c=BGI1EyvS-vxg9iK39ehpp3LKCTd0HvYgDt3PjMkUelE=" alt="men 4" className='w-9 rounded-full ' />
          </div>
          <div>
            <div>⭐️⭐️⭐️⭐️⭐️</div>
            <div>Trusted by 350+ Developers</div>
          </div>
        </div>


        <div className='bg-white   text-center '>
          <h1 className='font-sans text-5xl font-bold'>
            Ship <span className='italic font-light text-red-500 '>
              Landing Pages
            </span> fast <br /> with AI and full control.
          </h1>
          <br />

          <p>
            Get a Production - ready landing page in under <span className='font-extrabold text-red-500'> 2 Minutes </span> , with full code <br /> ownership, high customizability, and conversion-focused design
          </p>
        </div>



        <div className=' flex justify-center items-center min-h-screen '>
          <div className=' bg-white justify-center p-6 w-full max-w-3xl rounded-2xl'>

            <input type="text"
              placeholder='Describe your product, audience and key features'
              className='text-black w-full  h-20 p-4 rounded-lg  ' />

            <div className='mt-5 flex items-center justify-between '>

              <h3>Try Examples</h3>

              <button className='flex items-center gap-2 px-4 py-2 bg-yellow-400 font-medium '>Generate Now
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-TU_8q1OeilnuU1vnXCeWCznTSSWOlOrig&s"
                  alt="Gemini AI logo Image"
                  className='w-6 rounded-full' />
              </button>
            </div>
          </div>
        </div>





































        <div>Footer</div>
      </div>
    </div>
  )
}

export default App