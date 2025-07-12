// import React, { useState } fr</div>om 'react'
import images from '../assets/images/images'
import Category from '../components/Category'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center z-20 h-15 text-sm shadow-sm fixed top-0 border-b-gray-300 border-b bg-white'>
        <ul className='flex items-center justify-center gap-8 w-full '>
            <div className='py-3 px-2'>
                <img src={images.mainLogo} className='scale-90' alt="" />
            </div>
            <div className='relative group h-15 flex items-center'>
              <button className='py-2.5 px-4 cursor-pointer rounded-2xl hover:bg-amber-50 font-medium'>Job Bootcamps <i className="ri-arrow-down-s-line font-bold"></i></button>
              <div className='absolute w-100 pointer-events-none flex flex-col justify-between group-hover:pointer-events-auto -bottom-68 bg-white opacity-0 group-hover:opacity-100 rounded-br-2xl rounded-bl-3xl h-68 p-5'>
                <h1 className='text-[var(--text-gray-7)]'>For graduates</h1>
                <div className='w-full flex justify-between hover:bg-[var(--bg-pale-cyan)] cursor-pointer p-3 rounded-2xl'>
                  <img src={images.stack} className='p-3 border-1 border-gray-200 rounded-lg' alt="stack" />
                  <div className='flex flex-col justify-between'>
                    <h1 className='font-bold'>Full Stack Web Development With GenAi</h1>
                    <p>Certified by Coding Ninjas</p>
                  </div>
                </div>
                <hr className='text-gray-300' />
                <div className='w-full flex justify-between hover:bg-[var(--bg-pale-cyan)] cursor-pointer p-3 rounded-2xl'>
                  <img src={images.graph} className='p-3 border-1 border-gray-200 rounded-lg' alt="stack" />
                  <div className='flex flex-col justify-between'>
                    <h1 className='font-bold'>Full Stack Web Development With GenAi</h1>
                    <p>Certified by Coding Ninjas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=' group h-15 flex items-center'>
              <button className='py-3 px-4 cursor-pointer hover:bg-amber-50 rounded-2xl font-medium'>IIT Certifications <i className="ri-arrow-down-s-line font-bold"></i></button>
              <div className='w-screen h-104 absolute z-[-1] border-t border-gray-200 left-0 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none -bottom-104 rounded-b-3xl bg-white shadow-lg flex'>
                <div className="tabsection1 flex-1/10 rounded-r-3xl gap-3 flex flex-col items-end px-5 py-10 bg-[var(--bg-almost-white-2)]">
                  <h1 className='w-50 px-4 flex justify-star font-medium'>Category</h1>
                  <button className='px-4 py-4 rounded-2xl items-center bg-pink-100 w-50 justify-between flex'>For graduates <i class="ri-arrow-right-s-line"></i></button>
                  <button className='px-4 py-4 rounded-2xl items-center bg-pink-100 w-50 justify-between flex'>For collage students <i class="ri-arrow-right-s-line"></i></button>
                </div>
                <div className="tabsection2 flex-1/2">
                  <Category/>
                </div>
              </div>
            </div>
            <div className='relative group h-15 flex items-center'>
              <button className='py-3 px-4 cursor-pointer hover:bg-amber-50 rounded-2xl font-medium'>New Launches <i className="ri-arrow-down-s-line font-bold"></i></button>
              <div className='absolute w-120 -left-92 pointer-events-none group-hover:pointer-events-auto -bottom-35 opacity-0 group-hover:opacity-100 flex-col justify-between flex rounded-br-2xl rounded-bl-2xl p-4 bg-white h-35'>
                <h1 className='text-[var(--text-gray-7)]'>For graduates</h1>  
                <div className='w-full flex justify-between hover:bg-[var(--bg-pale-cyan)] cursor-pointer p-3 rounded-2xl'>
                  <img src={images.stack} className='p-3 border-1 border-gray-200 rounded-lg' alt="stack" />
                  <div className='flex flex-col justify-between'>
                    <h1 className='font-bold'>Full Stack Web Development With GenAi</h1>
                    <p>Certified by Coding Ninjas</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <button className='py-2 hover:opacity-70 cursor-pointer px-4 rounded-lg bg-[var(--bg-orange)] font-medium text-sm text-white'>Login</button>
        </ul>
    </nav>
  )
}

export default Navbar
