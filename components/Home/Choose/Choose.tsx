import ChooseHeading from '@/components/Helper/ChooseHeading'
import React from 'react'
import ChooseData from './ChooseData'

const Choose = () => {
  return (
    <div className='pt-20 pb-20'>
      <ChooseHeading heading='Why Choose Us?'/>
      <div className='w-[80%] mx-auto mt-14'>
        <ChooseData/>
      </div>
    </div>
  )
}

export default Choose
