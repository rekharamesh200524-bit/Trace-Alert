import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Report from './components/Report'
import Miss from './components/Miss'
import Profile from './components/Profile'


const App = () => {
 const location=useLocation()
  const hide =location.pathname==="/login" || location.pathname==="/"
  return (
  <>
  {(!hide)&&<Nav/>}
 
    <Routes>
    <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/miss' element={<Miss/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
    
  )
}

export default App
  


