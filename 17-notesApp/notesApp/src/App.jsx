import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState("")      // Stores the text entered in the title input

  const [Detail, setDetail] = useState("")     // Stores the text entered in textarea

  const [Task, setTask] = useState([])    // Stores all notes inside an array


  function formSubmited(e) {
    e.preventDefault()      // Stops page refresh after clicking submit
    const copyTask = [...Task]        // Create a copy of the Task array
    copyTask.push({       // Add a new note object into the copied array
      Title,
      Detail
    })
    setTask(copyTask)       // Update state with new array
    setTitle('')        // Clear input field after submission
    setDetail('')       // Clear textarea after submission
  }

  // Function for deleting a note
  function deleteNote(idx) {
    const copyTask = [...Task]        // Make copy of current notes
    copyTask.splice(idx, 1)
    /*
      splice(idx, 1)
      idx = position of note
      1 = remove one item
     */
    setTask(copyTask)    // Update state after deleting
  }

  return (
    <div className='h-screen bg-black text-white lg:flex '>
      {/* Form section */}
      <form
        onSubmit={(e) => {
          formSubmited(e)
        }}
        className='flex lg:w-1/2 items-start gap-4  p-10 p-10 flex-col'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* Title Input */}

        <input
          type="text"
          placeholder='Enter Task'
          className='px-5 py-2 border-2 w-full font-medium rounded bg-yellow-200 text-black outline-none'
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value)    // Update Title state while typing
          }}
        />
        <textarea
          type="text"
          placeholder='Enter Details'
          className=' px-5 py-2 text-black font-medium h-20 border-2 w-full h-32 bg-amber-100 rounded outline-none'
          value={Detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />
        <button
          className='text-black active:scale-95 bg-white px-5 py-3 rounded w-full outline-none'
        >
          Add Notes
        </button>
      </form>

      <div className='gap-5 lg:border-l-2 p-10 lg:w-1/2 bg-black'>
        <h1 className='text-3xl text-white font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-10 mt-5 h-full overflow-auto'>
          {Task.map((elem, idx) => {
            return (
              <div key={idx}
                className='h-52 w-40 items-start justify-between flex flex-col rounded-2xl p-4 bg-white text-black pb-5'>
                <div>
                  <h1 className='leading-tight text-xl font-bold'>{elem.Title}</h1>
                  <p className='mt-2 leading-tight font-medium text-gray-400'>{elem.Detail}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)      // Send current note index
                }} className='w-full bg-red-500 active:scale-95 rounded-2xl font-bold text-white'>Delete</button>
              </div>
            )
          })}

        </div>
      </div>





    </div >
  )
}

export default App




/*
REVISION:

useState("")
→ Stores single value

useState([])
→ Stores multiple values

e.preventDefault()
→ Stops page refresh

[...Task]
→ Creates copy of array

push()
→ Adds new item

map()
→ Loops through array

splice(index,1)
→ Removes one item

setState()
→ Updates state and refreshes UI
*/