import SeactionHeading from '@/components/Helper/SeactionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
      <SeactionHeading heading='Exploring Popular Destination'/>
      <div className='mt-14 w-[80%] mx-auto'>
        <DestinationSlider/>
      </div>
    </div>
  )
}

export default Destination
