import React from 'react'
import Hero from '../Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Choose from './Choose/Choose'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <Choose/>
    </div>
  )
}

export default Home
