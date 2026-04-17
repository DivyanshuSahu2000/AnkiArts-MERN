import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/paintings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      alert("Painting added ✅");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="w-4/5 flex flex-col justify-start items-start p-5 w border shadow-gray-500">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4  ">
          <div className="gap-2 ">
            <h1 className="text-xl font-600  ">Painting Title</h1>
            <input
              className="border rounded border-gray-400 "
              name="title"
              placeholder="Title"
              onChange={handleChange}
              required
            />
          </div>

          <h1 className="text-xl font-600  ">Painting Price</h1>
          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
            required
          />

          <h1 className="text-xl font-600  ">Painting Size</h1>
          <input
            name="size"
            placeholder="Size"
            onChange={handleChange}
            required
          />

          <h1 className="text-xl font-600  ">Painting Type</h1>
          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
          />

          <h1 className="text-xl font-600  ">Painting Image</h1>
          <input
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            required
          />

          <h1 className="text-xl font-600  ">On Wall Image</h1>
          <input
            name="rimage"
            placeholder="Room Image URL"
            onChange={handleChange}
            required
          />

          <h1 className="text-xl font-bold  ">Painting Description</h1>
          <textarea
            name="desc"
            placeholder="Description"
            onChange={handleChange}
            required
          />

          <button className="bg-black text-white py-2 rounded">
            Add Painting
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
