import { Link, useParams } from "react-router";
import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";

const Paintings = () => {
  const { category } = useParams();
  const { dummyPaintings, loading } = useContext(ItemContext);

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (painting) => {
    addToCart(painting);
    toast.success(`${painting.title} added to cart 🛒`, {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
    });
  };
  const filteredPaintings = category
    ? dummyPaintings.filter(
        (p) =>
          p.category.replace(/\s+/g, "").toLowerCase() ===
          category.replace(/\s+/g, "").toLowerCase()
      )
    : dummyPaintings;

  if (loading) {
    return <Loader />;
  }

  if (filteredPaintings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] ">
        <div className=" ">
          <img src="/notFound.svg" alt="Item Icon" width="30" height="30" />
        </div>
        <h1 className="text-center text-xl font-bold text-zinc-600  mt-1">
          No paintings found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-3 m-2">
      <h1 className="text-2xl md:text-4xl font-medium  relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-300 after:mt-1">
        {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {filteredPaintings.map((painting) => (
          <div
            key={painting._id}
            className="borde-2 bg-zinc-100 rounded-xl p-3  
                     shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <Link to={`/paintings/${painting._id}`}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`${painting.image}`}
                  alt={painting.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                />
              </div>
            </Link>
            <div className="flex gap-1 justify-between">
              <h3 className="text-lg font-bold mt-3">{painting.title}</h3>
              <h3 className="text-lg font-medium text-gray-700 mt-3">
                {painting.size}
              </h3>
              <h4 className="text-gray-600 text-lg  mt-3 font-medium">
                ₹{painting.price}
              </h4>
            </div>
            <div className="items-center justify-center flex">
              <button
                onClick={() => handleAddToCart(painting)}
                className="mt-3 w-3/4 gap-1 items-center justify-center flex bg-[#2e2856] hover:bg-[#4b3ea1] text-white font-medium px-4 py-2 rounded-lg shadow-md  hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                Add to Cart
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
