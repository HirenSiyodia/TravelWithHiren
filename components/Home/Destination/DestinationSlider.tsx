"use client";
import { destinationData } from "@/components/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      transitionDuration={1500}
      keyBoardControl={true}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px gap-8"
    >
      {destinationData.map((destination) => (
        <div
          key={destination.id}
          className="group relative w-full h-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out"
        >
          <img
            src={destination.image}
            alt={destination.country}
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              {destination.country}
            </h2>

            <p className="text-white/80 text-sm mt-1">
              {destination.travelers} travelers
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;
