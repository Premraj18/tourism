import React from 'react'
import './JanMap.css'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'

export default function JanMap() {
    return (
        <>  
            <Map />
            <Link className="link" to="/Jan"></Link>

        </>
    )
}
