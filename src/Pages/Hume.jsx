import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

const Hume = () => {
  return (
    <>
            <div className="bg-img"></div>
            <h2 className="text">The Seasonal Journey Guide</h2>
            <div className="dropdown">
            <div className="button ml-80">
              <Link to='/signup'><div className="btn">Sign up</div></Link>
              <Link to='/login'><div className="btn">Sign In</div></Link>
            </div>
                {/* <button className="btn btn-secondary dropdown-toggle light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Click Here
                </button> */}
                {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/jan_map">January</Link></li>
                    <li><Link className="dropdown-item" to="/feb_map">February</Link></li>
                    <li><Link className="dropdown-item" to="/march">March</Link></li>
                    <li><Link className="dropdown-item" to="/april">April</Link></li>
                    <li><Link className="dropdown-item" to="/may">May</Link></li>
                    <li><Link className="dropdown-item" to="/june">June</Link></li>
                    <li><Link className="dropdown-item" to="/july">July</Link></li>
                    <li><Link className="dropdown-item" to="/aug">August</Link></li>
                    <li><Link className="dropdown-item" to="/sep">September</Link></li>
                    <li><Link className="dropdown-item" to="/oct">October</Link></li>
                    <li><Link className="dropdown-item" to="/nov">November</Link></li>
                    <li><Link className="dropdown-item" to="/dec">December</Link></li>
                </ul> */}
            </div>
    </>
  )
}

export default Hume
