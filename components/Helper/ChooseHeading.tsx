import React from 'react'

type Props = { 
        heading:string;
    }

const ChooseHeading = ({heading}:Props) => {
    
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-xl sm:text-3xl text-blue-900 font-bold'>{heading}</h1>
              <p className='mt-2 text-gray-700 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit aliquam, tempore non atque ut?</p>
    </div>
  )
}

export default ChooseHeading
