import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-blue-900 py-8'>
    <div className='w-[80%] mx-auto mt-16'>
        <div className='grid grid-cols-2 gap-8 py-16 mx-auto'>
            <div className='flex flex-col justify-start items-start p-6'>
                <h1 className='text-2xl font-semibold tracking-wide py-6 text-white'>
                    What our customers are saying us?
                </h1>
                <p className='text-white text-lg font-light tracking-tight pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt fugiat praesentium dolores facilis delectus modi culpa aliquid deserunt ad!
                </p>
                <p className='text-white text-xl font-bold pt-4'>
                    4.88<br/></p>
                   <span className='text-white text-md font-light tracking-normal'> Overall Rating<br/>
                </span>
            </div>
            <div className='text-white'>
                image
            </div>
        </div>
    </div>  
    </div>
  )
}

export default Testimonial;