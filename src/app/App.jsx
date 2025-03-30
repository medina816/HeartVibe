import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './providers/router'
import './App.css'

function App() {

  return (
    <div  className='wrapper'>
      <RouterProvider router={myRouter}/>  
    </div>
  )
}

export default App
