import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-[url("/groot.jpg")]  bg-cover  bg-top h-screen w-full'>    
    <div className='max-w-5xl mx-auto text-center text-neutral-800 h-screen flex flex-col justify-center items-center gap-4 pb-40'>
        <div>
            <h1 className='text-5xl font-bold text-[#5FDB15]'>Save the Earth.</h1>
        <p>Even the smallest seed can grow into a mighty tree.</p>
        </div>

        <button className='p-4 border'>
            Plant a Tree Today
        </button>
    </div>
    </div>
  )
}