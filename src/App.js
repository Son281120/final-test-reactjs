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
        <Route exact path="/" component={All} />
        <Route path="/active" component={Active} />
        <Route path="/completed" component={Completed} />
      </Routes>
    </div>
  )
}

export default App
