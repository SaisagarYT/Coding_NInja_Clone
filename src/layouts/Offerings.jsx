import React from 'react'
import images from '../assets/images/images'

const Offerings = () => {
  return (
    <section className='w-screen h-screen bg-white absolute items-center flex-col flex'>
      <div className='w-[65%] h-full relative'>
        <h1 className='text-[var(--bg-light-gray-3)] text-8xl font-bold text-center py-15 border-l-2 border-gray-400 border-dotted'>OUR OFFERINGS</h1>
        <div className='absolute -left-13 flex items-center'>
          <img src={images.bootcamp} alt="" />
          <div className='flex items-center gap-5'>
            <p className='text-lg font-medium'>Job Bootcamp</p>
            <div className='px-4 text-sm font-medium bg-gray-200 py-1 rounded-r-2xl'>
              For graduation
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Offerings
