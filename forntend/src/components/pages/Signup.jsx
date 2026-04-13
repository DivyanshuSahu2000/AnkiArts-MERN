import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FaPencilAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name: form.name, email: form.email };
    signUp(userData);

    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl mb-4 text-center font-medium">Sign Up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />

          <button
            type="submit"
            className="bg-[#2e2856] hover:bg-[#4b3ea1] text-white py-2 rounded-md flex items-center justify-center gap-1.5"
          >
            Create Account
            <FaPencilAlt size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
