import React from 'react'

export default function Media() {
  return (
    <>
        <div className='flex justify-center align-top z-10'>
            <button className='px-3 text-black font-bold text-xl'>
                <p>All</p>
            </button>
            <button className='px-3 text-orange-400 font-bold text-xl'>
                <p>PHOTOS</p>
            </button>
            <button className='px-3 font-sans text-black font-bold text-xl'>
                <p>VIDEOS</p>
            </button>
        </div>
        <div>
            <div className='h-2 w-2 border-solid-black'>
                
            </div>
            <div></div>
            <div></div>
            <div></div>
        
        </div>
    </>
  )
}
