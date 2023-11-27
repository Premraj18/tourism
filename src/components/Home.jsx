import React from "react"
import {Link} from 'react-router-dom';

function Home (){

    return (
        <div className="homepage">
            <Link to='/signup'>Logout</Link>

        </div>
    )
}

export default Home