import React from "react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] ">
      <div className="loader"></div>
      <h4 className="text-xl font-bold text-zinc-600 ">{text}</h4>
    </div>
  );
};

export default Loader;
