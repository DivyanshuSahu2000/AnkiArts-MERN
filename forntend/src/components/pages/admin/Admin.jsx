import { useState } from "react";
import { toast } from "react-toastify";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    size: "",
    category: "",
    image: "",
    rimage: "",
    desc: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error("Title required");
      return;
    }
    if (formData.price <= 0) {
      toast.error("Invalid price");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/paintings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          title: formData.title.trim(),
          category: formData.category.trim(),
          size: formData.size.trim(),
          desc: formData.desc.trim(),
          image: formData.image.trim(),
          rimage: formData.rimage.trim(),
          price: Number(formData.price),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add painting");
      }
      const data = await res.json();
      toast.success("Added successfully");
      setFormData({
        title: "",
        price: "",
        size: "",
        category: "",
        image: "",
        rimage: "",
        desc: "",
      });
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 py-4 items-center flex flex-col ">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <div className="sm:w-4/5 w-full flex flex-col rounded-lg justify-start items-start p-4 py-3 border  bg-white border-gray-200  shadow-[0_0px_15px_rgba(169,165,169,30.01)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="gap-1 flex flex-col ">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Painting Title
                </label>
                <input
                  className="border rounded border-gray-300 w-full outline-none p-2 focus:border-black focus:ring-1 focus:ring-black transition-all  "
                  name="title"
                  value={formData.title}
                  placeholder="Title"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gap-1 flex flex-col ">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Type
                </label>{" "}
                <input
                  className="border rounded border-gray-300 w-full outline-none p-2 focus:border-black focus:ring-1 focus:ring-black transition-all  "
                  name="category"
                  value={formData.category}
                  placeholder="Category"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="gap-1 flex flex-col ">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Price
                </label>
                <input
                  className="border rounded border-gray-300 w-full outline-none p-2 focus:border-black focus:ring-1 focus:ring-black transition-all  "
                  name="price"
                  value={formData.price}
                  type="number"
                  placeholder="Price"
                  onChange={handleChange}
                  required
                  min="1"
                />
              </div>
              <div className="gap-1 flex flex-col ">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Size
                </label>
                <input
                  className="border rounded border-gray-300 w-full outline-none p-2 focus:border-black focus:ring-1 focus:ring-black transition-all  "
                  name="size"
                  value={formData.size}
                  placeholder="Size"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="gap-1 flex flex-col ">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Painting Image URL
              </label>
              <div className="flex justify-between gap-2">
                <input
                  className="border rounded border-gray-300 w-full outline-none p-2 focus:border-black focus:ring-1 focus:ring-black transition-all  "
                  name="image"
                  value={formData.image}
                  placeholder="Image URL"
                  onChange={handleChange}
                  required
                />
                {/* Live Preview */}
                {formData.image && (
                  <div className="rounded-lg overflow-hidden w-12 h-12 object-cover border border-gray-200 ">
                    <img
                      className="w-full h-full object-cover"
                      src={formData.image}
                      onError={(e) => (e.target.style.display = "none")}
                      alt="preview"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="gap-1.5 flex flex-col">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                On-Wall Image URL
              </label>
              <div className="flex  justify-between gap-2 items-end">
                <input
                  className="border rounded-lg border-gray-300 w-full outline-none p-2 focus:border-black focus:ring-1 focus:ring-black transition-all"
                  name="rimage"
                  value={formData.rimage}
                  placeholder="https://..."
                  onChange={handleChange}
                  required
                />
                {/* Live Preview */}
                {formData.rimage && (
                  <div className="mt-2 rounded-lg overflow-hidden w-12 h-12 object-cover border border-gray-200 ">
                    <img
                      src={formData.rimage}
                      alt="Room Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Description
              </label>
              <textarea
                className="border border-gray-300 rounded-lg w-full  min-h-[80px]  outline-none p-2 "
                name="desc"
                value={formData.desc}
                placeholder="Describe here..."
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="bg-black text-white py-2 rounded active:scale-99"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Painting"}
            </button>
          </form>
        </div>{" "}
      </div>
    </>
  );
};

export default Admin;
