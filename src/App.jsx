import React from 'react'
import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hume from './Pages/Hume'
import JanMap from './Year/YearMap/JanMap'
import FebMap from './Year/YearMap/FebMap'
import MarMap from './Year/YearMap/MarMap'
import AprMap from './Year/YearMap/AprMap'
import MayMap from './Year/YearMap/MayMap'
import JunMap from './Year/YearMap/JunMap'
import JulMap from './Year/YearMap/JulMap'
import AugMap from './Year/YearMap/AugMap'
import SepMap from './Year/YearMap/SepMap'
import OctMap from './Year/YearMap/OctMap'
import NovMap from './Year/YearMap/NovMap'
import DecMap from './Year/YearMap/DecMap'
import Contact from './components/Contact'
import About from './components/About'
import Detail from './Year/Deatail/Detail'
import Detail1 from './Year/Deatail/Detail1'
import Detail2 from './Year/Deatail/Detail2'
import Detail3 from './Year/Deatail/Detail3'
import Detail4 from './Year/Deatail/Detail4'
import Detail5 from './Year/Deatail/Detail5'
import Detail6 from './Year/Deatail/Detail6'
import Detail7 from './Year/Deatail/Detail7'
import Detail8 from './Year/Deatail/Detail8'
import Detail9 from './Year/Deatail/Detail9'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hume/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="det0" element={<Detail/>}/>
          <Route path="det1" element={<Detail1/>}/>
          <Route path="det2" element={<Detail2/>}/>
          <Route path="det3" element={<Detail3/>}/>
          <Route path="det4" element={<Detail4/>}/>
          <Route path="det5" element={<Detail5/>}/>
          <Route path="det6" element={<Detail6/>}/>
          <Route path="det7" element={<Detail7/>}/>
          <Route path="det8" element={<Detail8/>}/>
          <Route path="det9" element={<Detail9/>}/>

          <Route path='/JanMap' element={<JanMap/>}/>  
          <Route path='/FebMap' element={<FebMap/>}/>   
          <Route path='/MarMap' element={<MarMap/>}/>
          <Route path='/AprMap' element={<AprMap/>}/>
          <Route path='/MayMap' element={<MayMap/>}/>
          <Route path='/JunMap' element={<JunMap/>}/>
          <Route path='/JulMap' element={<JulMap/>}/>
          <Route path='/AugMap' element={<AugMap/>}/>
          <Route path='/SepMap' element={<SepMap/>}/>
          <Route path='/OctMap' element={<OctMap/>}/>
          <Route path='/NovMap' element={<NovMap/>}/>
          <Route path='/DecMap' element={<DecMap/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
