import React from 'react'

const ChooseData = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-10 mx-auto">
      
      <div className="flex flex-col items-center text-center gap-3">
        <img
          src="/images/c1.svg"
          alt="Best Price Guarantee"
          className="w-16 h-16"
        />

        <p className="text-xl font-semibold text-gray-800">
          Best Price Guarantee
        </p>

        <p className="text-sm text-gray-600 leading-6 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-3">
        <img
          src="/images/c2.svg"
          alt="Best Price Guarantee"
          className="w-16 h-16"
        />

        <p className="text-xl font-semibold text-gray-800">
          Easy & Quick Booking
        </p>

        <p className="text-sm text-gray-600 leading-6 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-3">
        <img
          src="/images/c3.svg"
          alt="Best Price Guarantee"
          className="w-16 h-16"
        />

        <p className="text-xl font-semibold text-gray-800">
          Customer Care 24/7
        </p>

        <p className="text-sm text-gray-600 leading-6 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
        </p>
      </div>

    </div>
  )
}

export default ChooseData