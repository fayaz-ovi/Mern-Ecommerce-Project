
import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
   
        <img src={assets.logo} className='w-36' alt="" />
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex  items-center gap-1'>
                <p>HOME</p>
                
            </NavLink>
            <NavLink to='/collection' className='flex  items-center gap-1'>
                <p>COLLECTION</p>
                
            </NavLink><NavLink to='/about' className='flex  items-center gap-1'>
                <p>ABOUT</p>
                
            </NavLink><NavLink to='/contact' className='flex  items-center gap-1'>
                <p>CONTACT</p>
                
            </NavLink>

        </ul>
    </div>
  )
}

export default Navbar



