import React, { useContext } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { cart } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <div className=" flex bg-gray-700 justify-between p-2 md:py-[10px] md:px-12  items-center z-50 ">
        <div className="logoContainer items-center flex font-medium  gap-2 [@media(max-width:400px)]:gap-1 text-amber-50">
          <div className="w-[4em]">
            <Link to="/" aria-label="logo">
              <img src="logoart.webp" alt="logo" />
            </Link>
          </div>
          <Link to="/">
            <span className="font-serif text-3xl [@media(max-width:400px)]:text-xl">
              AnkiArts{" "}
            </span>
          </Link>
          <span className="hidden md:block mx-[.5em] ">
            {" "}
            ♡ Your Walls, Our Canvas ♡
          </span>
        </div>
        <div className=" pages flex text-white text-lg [@media(max-width:400px)]:text-sm font-medium  m-2 gap-2 md:gap-10">
          <Link to="/about">
            <span className=" hover:text-gray-200">About</span>
          </Link>
          <Link to="/contact">
            <span className=" hover:text-gray-200">Contact</span>
          </Link>

          {/* <Link to="/cart">Cart ({cart.length})</Link> */}

          <Link to="/cart" className="relative mt-[5px] hover:scale-105">
            <span className="mt-[3px]">
              <FaShoppingCart />
            </span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-zinc-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full ">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="justify-around flex md:px-3 py-1 md:divide-x divide-gray-400  bg-gray-50 [@media(max-width:400px)]:text-sm [@media(max-width:325px)]:!text-[12px]">
        <Link to="/paintingtype/Acrylic">
          <span className="md:px-2 px-1 hover:text-gray-500 ">Acrylic</span>
        </Link>
        <Link to="/paintingtype/Gouache">
          <span className="md:px-2 px-1  hover:text-gray-500">Gouache</span>
        </Link>
        <Link to="/paintingtype/Pastel">
          <span className="md:px-2 px-1  hover:text-gray-500">Pastel</span>
        </Link>
        <Link to="/paintingtype/Fresco">
          <span className="md:px-2 px-1  hover:text-gray-500">Fresco</span>
        </Link>
        <Link to="/paintingtype/Encaustic">
          <span className="px-2 md:block hidden  hover:text-gray-500">
            Encaustic
          </span>
        </Link>
        <Link to="/paintingtype/Landscape">
          <span className="px-2 md:block hidden  hover:text-gray-500">
            Landscape
          </span>
        </Link>
        <Link to="/paintingtype/Still Life">
          <span className="px-2 md:block hidden  hover:text-gray-500">
            Still Life
          </span>
        </Link>
        {user ? (
          <div className="flex gap-2 items-center">
            <span className="font-medium flex items-center gap-0.5 ">
              <FaUserCircle />
              {user.name}
            </span>
            <button
              onClick={logout}
              className="bg-red-300 p-1  text-xs rounded hover:bg-red-400"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/signup"
              className="md:px-2 px-1 hover:text-gray-500 font-medium "
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="md:px-2 px-1 hover:text-gray-500 font-medium "
            >
              Login
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
