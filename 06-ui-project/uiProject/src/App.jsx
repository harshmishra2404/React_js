import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Undeserved',
      color: 'yellow'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underbank',
      color: 'orange'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro :'',
      tag : 'Hello',
      color : 'pink'
    },
        {
      img: 'https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro :'',
      tag : 'Hello',
      color : 'green'
    },
        {
      img: 'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro :'',
      tag : 'Hello',
      color: '#f59e0b'
    },
        {
      img: 'https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro :'',
      tag : 'Hello',
      color : 'royalblue'
    },
        {
      img: 'https://images.unsplash.com/photo-1541560052-5e137f229371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro :'',
      tag : 'Hello',
      color : 'black'
    },
        {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro :'',
      tag : 'Hello',
      color : 'violet'
    },
        {
      img: 'https://images.unsplash.com/photo-1542767352-e98201e84ed8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro :'',
      tag : 'professional',
      color : 'lightgreen'
    }
  ]
  return (
    <div >
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App