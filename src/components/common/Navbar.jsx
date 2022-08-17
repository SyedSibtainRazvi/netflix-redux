import React from 'react'
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "#ffffff",
    };
    return (
        <div className='flex items-center p-4 z-[100] w-full justify-start bg-black'>
            <NavLink to='/'>
                <h1 className='text-red-600 text-2xl font-bold mx-8 cursor-pointer'>
                    NETFLIX
                </h1>
            </NavLink>
            <ul className='text-gray-400 flex'>
                <li className='mx-4 hover:text-white'>
                    <NavLink
                        to='/'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }> Home
                    </NavLink>
                </li>
                <li className='mx-4 hover:text-white'>
                    <NavLink to='/movies'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }> Movies
                    </NavLink>
                </li>
                <li className='mx-4 hover:text-white'>
                    <NavLink to='/tv'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Shows
                    </NavLink>
                </li>

                <li className='mx-4 hover:text-white'>
                    <NavLink to='/popular'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }> Popular
                    </NavLink>
                </li>
            </ul>
            <div className=' hidden md:flex right-10 absolute'>
                
                <button className='text-white pr-4 cursor-pointer'> <Link to =''>Sign In</Link></button>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar