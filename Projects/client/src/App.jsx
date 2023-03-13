import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Dashboard from './components/Pages/Dashboard'
import Projects from './components/Pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/new-account' element={<NewAccount/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
