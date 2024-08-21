import React from 'react'
import Login from './Screens/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './Screens/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
