import React from 'react'
import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hume from './Pages/Hume'
import Jan from './Year/Jan'
import JanMap from './Year/YearMap/JanMap'
import Feb from './Year/Feb'
import FebMap from './Year/YearMap/FebMap'
import Mar from './Year/Mar'
import MarMap from './Year/YearMap/MarMap'
import Apr from './Year/Apr'
import AprMap from './Year/YearMap/AprMap'
import May from './Year/May'
import MayMap from './Year/YearMap/MayMap'
import Jun from './Year/Jun'
import JunMap from './Year/YearMap/JunMap'
import Jul from './Year/Jul'
import JulMap from './Year/YearMap/JulMap'
import Aug from './Year/Aug'
import AugMap from './Year/YearMap/AugMap'
import Sep from './Year/Sep'
import SepMap from './Year/YearMap/SepMap'
import Oct from './Year/Oct'
import OctMap from './Year/YearMap/OctMap'
import Nov from './Year/Nov'
import NovMap from './Year/YearMap/NovMap'
import Dec from './Year/Dec'
import DecMap from './Year/YearMap/DecMap'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hume/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/Jan' element={<Jan/>}/>
          <Route path='/JanMap' element={<JanMap/>}/>
          <Route path='/Feb' element={<Feb/>}/>
          <Route path='/FebMap' element={<FebMap/>}/>
          <Route path='/Mar' element={<Mar/>}/>
          <Route path='/MarMap' element={<MarMap/>}/>
          <Route path='/Apr' element={<Apr/>}/>
          <Route path='/AprMap' element={<AprMap/>}/>
          <Route path='/May' element={<May/>}/>
          <Route path='/MayMap' element={<MayMap/>}/>
          <Route path='/Jun' element={<Jun/>}/>
          <Route path='/JunMap' element={<JunMap/>}/>
          <Route path='/Jul' element={<Jul/>}/>
          <Route path='/JulMap' element={<JulMap/>}/>
          <Route path='/Aug' element={<Aug/>}/>
          <Route path='/AugMap' element={<AugMap/>}/>
          <Route path='/Sep' element={<Sep/>}/>
          <Route path='/SepMap' element={<SepMap/>}/>
          <Route path='/Oct' element={<Oct/>}/>
          <Route path='/OctMap' element={<OctMap/>}/>
          <Route path='/Nov' element={<Nov/>}/>
          <Route path='/NovMap' element={<NovMap/>}/>
          <Route path='/Dec' element={<Dec/>}/>
          <Route path='/DecMap' element={<DecMap/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
