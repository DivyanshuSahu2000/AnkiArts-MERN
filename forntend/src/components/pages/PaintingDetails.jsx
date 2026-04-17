import React, { useContext } from "react";
import { useParams } from "react-router";
import { ItemContext } from "../../context/ItemContext";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";

const PaintingDetails = () => {
  const { dummyPaintings, loading } = useContext(ItemContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (painting) => {
    addToCart(painting);
    toast.success(`${painting.title} added to cart 🛒`, {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
    });
  };
  const painting = dummyPaintings.find((p) => p._id === id);
  if (loading) {
    return <Loader />;
  }
  if (!painting) return <p>Painting not found.</p>;

  return (
    // <div className="flex flex-col justify-center items-center p-2">
    //   <h2 className="text-3xl font-serif sm:text-3xl md:text-4xl font-medium relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:-mt-1  m-2">
    //     {painting.title}
    //   </h2>
    //   <div className="w-full object-contain p-2 flex justify-center">
    //     <img
    //       src={painting.image}
    //       alt={painting.title}
    //       className="w-full md:w-3/4 rounded-lg border border-gray-400 shadow-[0_0px_25px_rgba(0,0,0,30.7)]  object-cover"
    //     />
    //   </div>
    //   <div className="w-full object-contain flex flex-col items-center p-2  mt-4 gap-3 justify-center">
    //     <h2 className="text-2xl font-serif font-medium sm:text-2xl md:text-3xl  relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:-mt-1 ">
    //       On Your Wall
    //     </h2>
    //     <img
    //       src={painting.rimage}
    //       alt={painting.title}
    //       className="w-full rounded shadow-md object-cover"
    //     />
    //   </div>
    //   <div className="w-full object-contain flex flex-col items-center p-2 gap-2 justify-center">
    //     <h2 className="text-2xl mt-4 font-serif font-medium">About Painting</h2>
    //     <p>{painting.desc}</p>
    //   </div>
    //   <div className="items-center justify-center sticky bottom-4 flex">
    //     <button
    //       // onClick={() => addToCart(painting)}
    //       onClick={() => handleAddToCart(painting)}
    //       className="mt-3  gap-1 items-center justify-center flex bg-[#2e2856] hover:bg-[#4b3ea1] text-white font-medium px-4 py-2 rounded-lg shadow-md  hover:shadow-xl transition-all duration-300 active:scale-95"
    //     >
    //       Add to Cart
    //       <FaShoppingCart />
    //     </button>
    //   </div>
    // </div>
    <>
      {" "}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="rounded-xl overflow-hiddn shadow-lg">
          <img
            src={painting.image}
            onError={(e) => (e.target.src = "/fallback.jpg")}
            alt={painting.title}
            className="w-full h-auto object-cover rounded-lg border border-gray-400 shadow-[0_0px_25px_rgba(0,0,0,30.7)]"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{painting.title}</h1>

          <p className="text-xl text-gray-700">₹{painting.price}</p>

          <p className="text-gray-600">{painting.desc}</p>

          <p className="text-sm text-gray-500">Size: {painting.size}</p>

          <p className="text-sm text-gray-500">Category: {painting.category}</p>

          {/* <button
          onClick={() => handleAddToCart(painting)}
          className="mt-4 p-2  bg-[#2e2856] fixed bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#4b3ea1] text-white py-3 rounded-lg"
        >
          Add to Cart
        </button> */}
        </div>
        {/* <div className="mt-10 text-center w-full">
        <h2 className="text-2xl font-semibold mb-4">On Your Wall</h2>

        <img
          src={painting.rimage}
          onError={(e) => (e.target.src = "/fallback.jpg")}
          className="mx-auto w-full md:w-2/3 rounded-lg shadow-md"
        />
      </div> */}
      </div>
      <div className="w-full object-contain flex flex-col items-center p-2  mt-4 gap-3 justify-center">
        <h2 className="text-2xl font-serif font-medium sm:text-2xl md:text-3xl  relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:-mt-1 ">
          On Your Wall
        </h2>
        <img
          src={painting.rimage}
          alt={painting.title}
          className="w-full rounded shadow-md object-cover"
        />
      </div>
      {/* <div className="w-full object-contain flex flex-col items-center p-2 gap-2 justify-center">
        <h2 className="text-2xl mt-4 font-serif font-medium">About Painting</h2>
        <p>{painting.desc}</p>
      </div> */}
      <div className="items-center justify-center sticky bottom-4 flex">
        <button
          // onClick={() => addToCart(painting)}
          onClick={() => handleAddToCart(painting)}
          className="mt-3  gap-1 items-center justify-center flex bg-[#2e2856] hover:bg-[#4b3ea1] text-white font-medium px-4 py-2 rounded-lg shadow-md  hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          Add to Cart
          <FaShoppingCart />
        </button>
      </div>
    </>
  );
};

export default PaintingDetails;
