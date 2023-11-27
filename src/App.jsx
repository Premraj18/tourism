import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hume from './Pages/Hume'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hume/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
