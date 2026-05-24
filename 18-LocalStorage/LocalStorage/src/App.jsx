import React from 'react'

const App = () => {
  // const user = localStorage.setItem('Name','Harsh Mishra')   // setItem() → stores data in Local Storage

  // const data = localStorage.getItem('Name')
  // console.log("From Local Storage:- ",data)

  const data2 = {
    'Name': 'Harsh Mishra',
    'age': 25,
    'Address': 'Mumbai',
    'Salary': 30000,
    'Department': 'Developer'
  }

  // localStorage.setItem('UserData',data2)
  localStorage.setItem('UserKaData', JSON.stringify(data2))   // JSON.stringify() → converts object → string

  const dataOfdata2 = JSON.parse(localStorage.getItem('UserKaData'))    // JSON.parse() → converts string → object
  console.log(dataOfdata2)
  return (
    <div>
    </div>
  )
}

export default App 