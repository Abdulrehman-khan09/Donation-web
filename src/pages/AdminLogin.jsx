import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/admin/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
