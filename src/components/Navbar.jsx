import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (   
      <header className=' h-20 text-gray-600 body-font bg-slate-100 drop-shadow-sm fixed top-0
       w-full' style={{zIndex:'100'}}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center top-0">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Seasonal-tour</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Home</a>
                        <a className="mr-5 hover:text-gray-900">About</a>
                    </nav>
                    <Link to='/'><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mr-24 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout</button></Link>
                </div>
        </header>
  )
}

export default Navbar
