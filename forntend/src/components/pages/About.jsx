import React from "react";

const About = () => {
  return (
    <div className="relative h-[85vh] bg-gray-200 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover sm:bg-contain bg-center bg-no-repeat opacity-75"
        style={{ backgroundImage: 'url("/Aboutbg.webp")' }}
      ></div>
      <div
        className="relative z-10 p-4 sm:p-10 mx-auto flex flex-col items-center text-center  -top-25
        "
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl font-medium relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-300 after:mt-1">
          About AnkiArts
        </h1>

        <div className="w-full max-w-2xl mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
          <p>Art is, after all, only a trace-</p>
          <p>like a footprint which shows that</p>
          <p>one has walked bravely and in great happiness.</p>
          <p className="font-medium mb-4">-Robert Henri</p>
        </div>
      </div>
    </div>
  );
};

export default About;
