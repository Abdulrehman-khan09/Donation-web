import React, { useState } from "react";

const SeekerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    passport: "",
    travelType: "Hajj",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pilgrimage application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Pilgrimage Support Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Passport Number */}
          <div>
            <label className="block text-gray-700">Passport Number</label>
            <input
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Travel Type */}
          <div>
            <label className="block text-gray-700">Travel Type</label>
            <select
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
            >
              <option value="Hajj">Hajj</option>
              <option value="Umrah">Umrah</option>
            </select>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-gray-700">Reason for Seeking Support</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeekerForm;
