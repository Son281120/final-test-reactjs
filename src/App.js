import React from 'react'
import './App.scss'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>#todo</h1>
      <Menu/>
      <Routes>
        <Route path="/" element={<All/>} />
        <Route path="/active" element={<Active/>} />
        <Route path="/completed" element={<Completed/>} />
      </Routes>
    </div>
  )
}

export default App
