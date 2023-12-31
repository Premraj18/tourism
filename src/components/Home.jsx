import { Link } from 'react-router-dom';
import '../Pages/home.css'
import React, { useState } from 'react'
import Navbar from './Navbar';
import video from '../assets/HomeImg/bg-vid.mp4'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="bg-vid w-full"> 
                <video src={video} muted autoPlay loop type="video/mp4" ></video>
            </div>
            <Navbar/>
            <div className='w-44s dropdown'>
                <div className="relative inline-block">
                    <div className="hero">
                        <h2>According To Your Month</h2>
                        <h2 className='text-5xl mt-4 mb-8'>Search Your Holiday</h2>
                    </div>
                    <button
                        type="button"
                        className=" w-96 px-4 py-4 text-white bg-blue-700 font-medium rounded-lg text-sm inline-flex items-center"
                        onClick={toggleDropdown}
                    >
                        Click Here <svg  className="w-2.5 h-2.5 ml-64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="origin-top-right absolute right-20 mt-2 w-96 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <li>
                                    <Link
                                        to='/JanMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        January
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/FebMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        February
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/MarMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        March
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/AprMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        April
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/MayMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        May
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/JunMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        June
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        to='/JulMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        July
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to='/AugMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        August
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/SepMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        September
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/OctMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        October
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/NovMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        November
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/DecMap'
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={closeDropdown}
                                    >
                                        December
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>

    )
}

export default Home