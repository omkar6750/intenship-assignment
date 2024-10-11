import React from 'react'
import dog2 from '../assets/dog2.png'
export default function History() {
  return (
        <div className='relative'>
                 

                <svg width="100%" height="90vh" className="z-20 polygon">
                    <path d="M0 0 H1360 V670 L0 550 Z" fill="#fbbf24" />
                </svg> 
                <img src={dog2} alt="" className='z-30 absolute left-20 top-28 w-[550px] h-auto'/>
                <div className="absolute top-16 right-16">
                    <div className='relative flex flex-col text-right  justify-start'>
                        <h2 className="text-6xl font-extrabold font-sans text-orange-500 mb-5">History of</h2>
                        <h1 className="text-9xl font-cheeseburga text-white mb-4 ">Alabay</h1>
                        <p className='text-2xl font-sans-ui font-bold text-slate-800 '>The Central Asian Shepherd Dog, also<br/>known as Alabay, has been a guardian of<br/> livestock and propertyfor centuries.<br /> Originating from Central Asia, these dogs<br /> are renowned for their courage,strength,<br /> and loyalty.</p>
                
                    </div>

                </div>

                 

        </div> 
  )
}
