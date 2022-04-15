import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome } from 'react-icons/fi';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className='nav-center flex justify-between items-center py-2 px-6 md:px-12 shadow-[#031441] shadow-lg rounded-b-lg'>
            <NavLink to='/'>
                <img src='https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png' alt='logo'
                className='logo w-[10rem] h-[5rem] object-cover'
                />
            </NavLink>
            <ul className='nav-links flex gap-6 mt-3'>
                <li className='nav-home'>
                    <NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 border-b-[#ff6801]" : "text-white"}>
                    <span className='home-icon md:hidden text-2xl'>
                        <i class="fa-solid fa-house"></i>
                    </span>
                    <span className='home-text hidden md:inline-block'>
                        Home
                    </span>
                    </NavLink>
                </li>
                <li className='nav-about'>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "border-b-2 border-b-[#ff6801]" : "text-white"}>
                    <span className='about-icon md:hidden text-2xl'>
                        <i class="fa-solid fa-circle-info"></i>
                    </span>
                    <span className='about-text hidden md:inline-block'>
                        About
                    </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar