import React, { Fragment, useState } from 'react'
import { BsGift, BsBell, BsMenuDown } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa';

import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNavbar(!navbar);

    const activeStyle = {
        textDecoration: "underline",
    };
    return (
        <Fragment>
            <div className='flex items-center p-4 z-[100] w-full justify-start bg-black'>
                <NavLink to='/'>
                    <h1 className='text-red-600 text-3xl font-bold mx-8 cursor-pointer'>
                        NETFLIX
                    </h1>
                </NavLink>
                <div>
                    <ul className='text-gray-400 hidden md:flex'>
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
                            <NavLink to='/tvshows'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }> Tv Shows
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
                </div>
                <div onClick={handleClick} className='md:hidden z-10 text-white right-10 absolute'>
                    {!navbar ? <FaBars /> : <FaTimes />}
                </div>
                <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center cursor-pointer text-white items-center'}>
                <li className='py-6 text-4xl'>
                    <Link to='/' onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='/movies'>
                        Movies
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='/tvshows'>
                        Tv Shows
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='/popular'>
                        Popular
                    </Link>
                </li>
            </ul>
                <div className=' hidden md:flex text-gray-400'>
                    <BsGift className='absolute right-[260px] hover:text-white ' />
                    <BsBell className='absolute right-[220px] hover:text-white ' />
                    <BsMenuDown className='absolute right-[180px] hover:text-white' />
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar