import { navLinks } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

const Nav = () => {
  return (
    <div className="bg-blue-900 transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full ">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-lg md:text-xl text-white font-bolc">
            TravelWithHiren
          </h1>
        </div>
        {/* Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="relative text-white text-base font-medium w-fit hover:text-blue-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </p>{" "}
            </Link>
          ))}
        </div>
        {/* button */}
        <div className="flex items-center space-x-4"> 
          <button className="md:px-10 md:py-2.5 sm:px-6 sm:py-2 px-8 py-2 text-black text-base bg-white rounded-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            Book Now
          </button>
          {/* burger menu */}
          <HiBars3BottomLeft className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
