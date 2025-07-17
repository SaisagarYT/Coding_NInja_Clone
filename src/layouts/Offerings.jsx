import React from 'react'
import images from '../assets/images/images'
import Cards from '../components/Cards'

const Offerings = () => {
  return (
    <section className='w-screen bg-white absolute items-center flex-col flex'>
      <div className='w-[65%] h-auto relative'>
        <h1 className='text-[var(--bg-light-gray-3)] text-8xl pt-18 pb-28 font-bold text-center border-l-2 border-gray-400 border-dashed before:w-1 before:h-10 before:bg-red-400 before:content-[""]'>OUR OFFERINGS</h1>
        <div className='absolute -bottom-13 -left-12.5 h-30 flex items-center'>
          <img src={images.bootcamp} className=' size-25' alt="" />
          <div className='flex items-start h-full pt-9 gap-5'>
            <p className='text-lg font-medium'>Job Bootcamp</p>
            <div className='px-4 text-sm font-medium bg-gray-200 py-1 rounded-r-2xl'>
              For graduation
            </div>
          </div>
        </div>
      </div>
      <div className='w-[65%] h-auto'>
        {/* cards */}
        <div className='w-full flex p-10 gap-5 border-l-2 border-gray-400  border-dashed'>
          <div className='w-1/2 h-48 rounded-2xl overflow-hidden shadow-lg'>
            <div className='w-full bg-[var(--bg-light-indigo)] h-[70%] flex items-center gap-4 justify-between p-4'>
              <img src={images.stack} className='p-3 size-18 bg-white rounded-full' alt="" />
              <h1 className='text-lg font-bold'>Full Stack Web Develpment with GenAI</h1>
            </div>
            <div className='w-full h-[30%] text-sm p-3 flex items-center justify-between'>
              <p>140+ Hrs of Content</p>
              <p>600+ Problems</p>
              <p>10k+ Learners</p>
            </div>
          </div>
          <div className='w-1/2 h-48 rounded-2xl overflow-hidden shadow-lg'>
            <div className='w-full bg-[var(--bg-light-indigo)] h-[70%] flex items-center gap-4 justify-between p-4'>
              <img src={images.graph} className='p-3 size-18 bg-white rounded-full' alt="" />
              <h1 className='text-lg font-bold'>Full Stack Web Develpment with GenAI</h1>
            </div>
            <div className='w-full h-[30%] text-sm p-3 flex items-center justify-between'>
              <p>140+ Hrs of Content</p>
              <p>600+ Problems</p>
              <p>10k+ Learners</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center bg-[var(--bg-almost-white-2)] border-gray-400'>
        <div className='w-[65%] h-full relative border-l-2 border-dashed border-gray-400'>
          <div className='flex items-center absolute gap-5 -left-5.5 top-20'>
            <img src={images.certificate} className='size-10' alt="certificate" />
            <p className='text-md font-medium'>IIT Certification</p>
          </div>
          <div className='w-full flex py-35 px-10 flex-col items-start'>
            <span className='py-1 px-3 flex items-center justify-center rounded-2xl text-[12px] font-medium bg-[var(--bg-warm-brown)] text-[var(--bg-almost-white-2)]'>For graduates</span>
            <div className='w-full flex-wrap py-5 flex justify-between gap-4'>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-90 bg-white'>
        <div className='w-[65%] h-full'>

        </div>
      </div>
    </section>
  )
}

export default Offerings
