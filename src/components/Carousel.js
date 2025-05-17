import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto overflow-hidden">
      <div className="flex items-center justify-between w-full h-full px-2 sm:px-4">
        {/* <button onClick={prevSlide} className="text-2xl text-white px-4 hover:text-[#61dafb] transition">
          &lt;
        </button> */}
        <button
            onClick={prevSlide}
            className="text-2xl mr-2 text-white bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
            <ChevronLeft className="text-white" />
        </button>

        <div className="w-full h-full items-center justify-center overflow-hidden">
          {items[current]}
        </div>

        <button
            onClick={nextSlide}
            className="text-2xl ml-2 text-white bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
            <ChevronRight className="text-white" />
        </button>
        {/* <button onClick={nextSlide} className="text-2xl text-white px-4 hover:text-[#61dafb] transition">
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
