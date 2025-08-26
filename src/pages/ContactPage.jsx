import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h1>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Email</h2>
            <p className="text-gray-600 mt-2">support@donationapp.org</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
            <p className="text-gray-600 mt-2">+92 300 1234567</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Office</h2>
            <p className="text-gray-600 mt-2">
              123 Donation Street, Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
