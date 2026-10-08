import { hotelsData } from '@/components/data/data'
import HotelHeading from '@/components/Helper/HotelHeading'
import React from 'react'

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <HotelHeading heading="Recommended Hotels" />

      <div className="w-[80%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotelsData.map((hotel) => (
          <div
            key={hotel.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />

            {/* Details */}
            <div className="p-4 flex flex-col gap-2">
              <h1 className="text-lg font-bold text-blue-900">
                {hotel.name}
              </h1>

              <p className="text-gray-700 text-sm">
                {hotel.location}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold">
                  {hotel.rating}
                </span>

                <span className="text-gray-600 text-sm">
                  ({hotel.reviews} reviews)
                </span>
              </div>

              <p className="text-gray-700 text-sm font-medium">
                ${hotel.price} per night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotel