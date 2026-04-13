import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { Link } from "react-router";

const Carousel = () => {
  const { dummyPaintings } = useContext(ItemContext);
  const [current, setCurrent] = useState(0);

  const carouselItems = dummyPaintings.slice(0, 5);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselItems.map((item, i) => (
          <Link
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] flex-shrink-0 flex items-center justify-center bg-gray-200"
            key={item.id}
            to={`/paintings/${item.id}`}
            aria-label="painting"
          >
            <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] flex-shrink-0 flex items-center justify-center bg-gray-200">
              <img
                src={item.rimage}
                alt={`painting-${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, id) => (
          <button
            key={id}
            aria-label="slide dot"
            onClick={() => setCurrent(id)}
            className={`w-3 h-3 rounded-full ${
              id === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
