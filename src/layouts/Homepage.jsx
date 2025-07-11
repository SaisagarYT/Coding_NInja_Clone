import React from 'react'

const Homepage = () => {
  return (
    <header className='w-screen top-0 z-10'>
      <main className='w-screen bg-gradient-to-b pb-15 from-[#0f1214] from-30% via-[#020203e8] via-50% to-[#0f1215] opacity-95 flex items-center flex-col'>
        <div className='flex justify-center items-center flex-col'>
          <div className='mt-30 flex justify-center items-center flex-col'>
            <h1 className='text-[white] text-2xl font-medium animate-gradient'>Restricted by oppertunities?</h1>
            <h1 className='text-6xl/tight font-bold text-white w-150 text-center'>Get the tech career you deserve Faster.</h1>
            <p className='text-white py-5'>Structured coding course that get you there faster and confidence.</p>
          </div>
          <button className='mt-10 px-8 text-white py-4 bg-[var(--bg-orange)] rounded-lg font-medium'>Explorring offerings </button>
        </div>
        <video src="https://files.codingninjas.com/episodic-promo_7-sec-1728388305.mp4" playsInline className='w-225 mt-20 h-auto rounded-2xl bg-white' autoPlay muted>
          
        </video>
      </main>
    </header>
  )
}

export default Homepage
