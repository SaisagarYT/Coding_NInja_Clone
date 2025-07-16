import React from 'react'
import images from '../assets/images/images'

const Cards = () => {
  return (
    <div className='w-65 h-90 bg-white border-2 border-[var(--text-warm-brown)] rounded-2xl'>
      <div className='w-full justify-center pt-3 flex'>
        <img src={images.collage1} alt="clg1" />
      </div>
        <div className='w-full py-2 px-4 flex flex-col justify-between'>
          <p className='font-medium text-lg'>PG Certification in Data Analytics with GenAI</p>
          <br /><br />
          <p className='text-sm font-medium bg-[var(--text-light-cream)] text-center p-1'>E&ICT Acadamy, IIT Guwahati</p>
        </div>
        <div className='w-full p-4'>
          <div className='w-full border-t-1 border-gray-200 flex justify-between pt-5'>
            <div className='flex gap-3'>
              <img src={images.chatgpt} alt="" />
              <img src={images.powerbi} alt="" />
              <img src={images.meta} alt="" />
            </div>
            <p>6 months</p>
          </div>
        </div>
    </div>
  )
}

export default Cards
