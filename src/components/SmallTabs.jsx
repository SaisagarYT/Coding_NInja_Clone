import React from 'react'
import images from '../assets/images/images'

const SmallTabs = () => {
  return (
    <div className='w-90 flex justify-between hover:bg-[var(--bg-pale-cyan)] p-2 cursor-pointer rounded-2xl'>
        <div className='h-full flex items-start'>
            <img src={images.stack} className='p-3 scale-70 border-1 border-gray-200 rounded-lg' alt="stack" />
        </div>
        <div className='flex flex-col justify-between p-3'>
            <h1 className='text-[var(--text-gray-8)]'>Full Stack Web Development With GenAi</h1>
            <p>Certified by Coding Ninjas</p>
        </div>
    </div>
  )
}

export default SmallTabs
