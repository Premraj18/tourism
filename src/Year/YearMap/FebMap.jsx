import React from 'react'

import './febMap.css'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'

const FebMap = () => {
  return (
    <>
    <Map/>
    <Link className="link2" to="/Feb"></Link>
    </>
  )
}

export default FebMap
