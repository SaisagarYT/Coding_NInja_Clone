import React from 'react'
import Navbar from './layouts/Navbar'
import Homepage from './layouts/Homepage'
import Offerings from './layouts/Offerings'

const App = () => {
  return (
    <div className='w-screen'>
       <Navbar/>
       <Homepage/>
       <Offerings/>
    </div>
  )
}

export default App
