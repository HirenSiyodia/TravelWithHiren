import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const Searchbox = () => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-6 w-[95%] sm:w-[80%] mx-auto mt-8">
      {/* Location */}
      <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="w-6 h-6 text-blue-900 shrink-0" />

        <div>
          <p className="text-lg font-medium mb-1">
            Location
          </p>

          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full border-none outline-none py-1 text-sm placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Start Date */}
      <div className="flex items-center space-x-4">
        <FaCalendarAlt className="w-6 h-6 text-blue-900 shrink-0" />

        <div>
          <p className="text-lg font-medium mb-1">
            Start Date
          </p>

          <input
            type="date"
            className="w-full border-none outline-none py-1 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* End Date */}
      <div className="flex items-center space-x-4">
        <FaCalendarAlt className="w-6 h-6 text-blue-900 shrink-0" />

        <div>
          <p className="text-lg font-medium mb-1">
            End Date
          </p>

          <input
            type="date"
            className="w-full border-none outline-none py-1 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Guest */}
      <div className="flex items-center space-x-4">
        <FaUser className="w-6 h-6 text-blue-900 shrink-0" />

        <div>
          <p className="text-lg font-medium mb-1">
            Guest
          </p>

          <input
            type="number"
            min="1"
            placeholder="Number of guests"
            className="w-full border-none outline-none py-1 text-sm placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;