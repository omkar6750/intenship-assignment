import React from 'react'
import image from '../assets/image.png';



export default function Hero() {
  return (
    <>
        
        <div className='fixed w-full h-screen bg-cover bg-center' style={{backgroundImage: `url(${image})`}}>
            <div className='relative-h-screen absolute inset-0 flex flex-col items-center'>
                <h1 className='top-0 text-border gradient-text text-[8rem] font-cheeseburga font-bold'>
                    <span >WECOME TO ALABAY WORLD</span>
                </h1>

                <div className='bg-black flex flex-col absolute justify-center top-[65%] w-full'>
                    <p className="mt-3 font-cheeseburga text-center text-white text-3xl ">
                        WHERE THE <span className="text-yellow-400">LEGENDARY CENTRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.
                    </p>
                    <p className="font-cheeseburga text-center text-white text-3xl "> 
                        JOIN US IN CELEBRATING THE <span className="text-yellow-400">STRENGTH, LOYALTY, AND HERITAGE</span> OF THE ALABAY
                    </p> 
                    <p className="mb-3 font-cheeseburga text-center text-white text-3xl ">
                        BREED.
                    </p>
                    
                </div>
            </div>
        </div>
    </>
  )
}
