// src/pages/CommunityPage.jsx
import React, { useState } from "react";
import { Upload } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    title: "Preparing for Pilgrimage",
    description: "Bought essentials for my journey.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },

  
  
    {
      id: 3,
      title: "Travel Essentials",
      description: "Packed all the necessary items.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
  {
    id: 1,
    title: "Preparing for Pilgrimage",
    description: "Bought essentials for my journey.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
];

const CommunityPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (mock only) ✅");
    setFormData({ title: "", description: "", file: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Community Support
        </h1>
        <p className="text-gray-600">
          Share your journey, inspire others, and get support from the community.
        </p>
      </div>

      {/* Upload Form */}
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 mb-16">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Upload Your Story
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Write a short description..."
            ></textarea>
          </div>

          
           <label className="block text-sm font-medium text-gray-700 mb-2">
              Supporting Documents *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                Upload Your Journey
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                
                className="hidden"
                id="documents"
              />
              <label
                htmlFor="documents"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer inline-block"
              >
                Choose Files
              </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Community Posts */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
