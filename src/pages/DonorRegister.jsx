import React, { useState } from "react";
import { Link } from "react-router-dom";

const DonorRegister = () => {
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
    console.log("Donor Register Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Donor Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
            value={formData.password}
            onChange={handleChange}
            required
          />
         
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Register as Donor
          </button>
            <Link to={'/donor/login'} className="text-sm text-center text-gray-600">
                if you have an account? <span className="text-green-600 hover:underline">Login</span>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default DonorRegister;
