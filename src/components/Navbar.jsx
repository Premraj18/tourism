import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (   
    <header className=" w-full drop-shadow-sm bg-slate-50 text-black body-font fixed top-0" style={{zIndex:'100'}}>
    <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <a className="flex title-font ab font-bold items-center text-black mb-4 md:mb-0">
        <span className="ml-16 text-xl">Seasonal-Guide</span>
      </a>
      <div className='flex mr-20'>
      <nav className="md:ml-auto mr-8 flex flex-wrap items-center text-base justify-between ">
        <Link to='/home' className="mr-5 hover:text-gray-900">Home</Link>
        <Link to='/about' className="mr-5 hover:text-gray-900">About</Link>
        <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
      </nav>
      <Link to='/' ><button className="inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
        
      </button></Link>
      </div>
    </div>
  </header>
  )
}

export default Navbar
