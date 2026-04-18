import React from 'react'

const App = () => {


  function clicked() {
    alert("Button clicked!");
  }

  function hover() {
    alert("mouse hover")
  }

  function inputChanging(elem) {
    console.log(elem.target.value)
  }

  function pageScrolling(elem){
    console.log('page Scrolling')
  }

  return (
    <div>
      {/* <h1>Hello Harsh Mishra</h1>
      <button onClick={clicked}>
        click me
      </button>
      <div id='paragraph'>
        <input onChange={inputChanging} type="text" placeholder='Enter Your Name'/>
      </div> */}

      {/* <div>
        <input onChange={inputChanging} type="text" placeholder='Enter Your Name' />
      </div>


      <div onMouseMove={(elem)=>{
        console.log(elem.clientY)
      }} className="box">
        this is a box
      </div> */}

      <div className='boxes' onWheel={pageScrolling}> 
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>



    </div>
  )
}

export default App