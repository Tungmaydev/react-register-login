import React from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      
    </div>
  )
}
