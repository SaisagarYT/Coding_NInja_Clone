import React from 'react'
import images from '../assets/images/images'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center h-18 shadow-xl'>
        <ul className='flex items-center'>
            <div className='py-3 px-2 bg-red-200'>
                <img src={images.mainLogo} alt="" />
            </div>
            <button className='py-3'>Job Bootcamps</button>
            <button className='py- 3'>IIT Certifications</button>
            <button className='py-3'>New Launches</button>
            <button className='py-3 px-6 rounded-lg bg-[var(--bg-orange)] font-medium text-white'>Login</button>
        </ul>
    </nav>
  )
}

export default Navbar
