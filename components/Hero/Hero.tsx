import React from 'react'
import Searchbox from '../Helper/Searchbox'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-screen'>
        <div className='absolute inset-0 bg-black/40 z-10'></div>
        <video src='/images/hero1.mp4' autoPlay muted loop preload='metadata' className='w-full h-full object-cover'/>
        <div className='absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div>
                    <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>
                        Let's Enjoy The Nature
                    </h1>
                    <p className='text-center text-lg text-white font-normal tracking-wide'>
                        Get the best prices on 2,000,000+ properties, worldwide
                    </p>
                </div>
                <Searchbox/>
                <Link href='#' className='mt-6 px-18 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-200'>
                    Explore Now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
