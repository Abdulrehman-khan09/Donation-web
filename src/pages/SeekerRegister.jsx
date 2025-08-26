import React, { useState } from "react";
import { Link } from "react-router-dom";

const SeekerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seeker Register Data:", formData);
    // API Call will go here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Seeker Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Register as Seeker
          </button>

            <Link to={'/seeker/login'} className="text-sm text-center text-gray-600">
                if you have an account? <a href="/seeker/login" className="text-blue-600 hover:underline">Login</a>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default SeekerRegister;
