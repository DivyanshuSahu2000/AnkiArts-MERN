import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../Loader";
import { Navigate } from "react-router";

const AdminList = () => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all paintings
  const fetchPaintings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/paintings");
      const data = await res.json();
      setPaintings(data);
    } catch (error) {
      toast.error("Failed to load paintings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaintings();
  }, []);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this painting?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/paintings/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      // remove from UI instantly
      setPaintings((prev) => prev.filter((p) => p._id !== id));

      toast.success("Painting deleted ✅");
    } catch (error) {
      toast.error("Delete failed ❌");
    }
  };
  const handleEdit = () => {
    Navigate(`/admin/${p._id}`);
  };
  if (loading) {
    return <Loader text="Fetching Paintings..." />;
  }

  return (
    <div className="p-2 sm:p-5 md:p-6">
      <h1 className="text-2xl font-bold mb-4">All Paintings</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {paintings.map((p) => (
          <div
            key={p._id}
            className="flex items-center gap-2 border p-2 sm:p-3 rounded-xl shadow-sm hover:shadow-md transition bg-white"
          >
            {/* Image */}
            <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] flex-shrink-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Title + Price */}
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-xs sm:text-base truncate">
                {p.title}
              </h2>
              <p className="text-gray-600 text-[11px] sm:text-sm mt-1">
                ₹{p.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleEdit(p._id)}
                className="bg-blue-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-sm hover:bg-blue-600 transition cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-sm hover:bg-red-600 transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminList;
