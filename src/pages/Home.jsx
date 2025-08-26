import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between  items-center px-8 py-4 shadow-md bg-white border-b border-gray-200">
        <h1 className="text-2xl font-bold text-indigo-700">Pilgrimage Aid</h1>
        <div className="flex items-center space-x-8">
          <Link to="/contact" className="text-gray-700 text-xl font-bold hover:text-indigo-600">Contact Us</Link>
          <Link to="/learn-more" className="text-gray-700 text-xl font-bold hover:text-indigo-600">Learn More</Link>
          <Link to="/community" className="text-gray-700 text-xl font-bold hover:text-indigo-600">Our Community</Link>
          
          {/* Seeker */}
          <Link 
            to="/seeker/login" 
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-semibold"
          >
            Are you a Seeker?
          </Link>

          {/* Donor */}
          <Link 
            to="/donor/login" 
            className="px-4 py-2 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 "
          >
            Donor Login
          </Link>

          {/* Admin */}
          <Link 
            to="/admin/login" 
            className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-700 font-semibold"
          >
            Admin Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 py-20 bg-gray-100 flex-grow">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Support Pilgrims. Make Journeys Possible.</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our platform connects donors with seekers who wish to fulfill their spiritual journey. 
            Donate with trust, seek support with dignity, and share your journey with the community.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/learn-more"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Pilgrimage"
            className="rounded-xl shadow-lg w-[400px] h-[280px] object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-12 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 mb-4">Transparent Donations</h4>
            <p className="text-gray-600">
              Donors see exactly where their contributions go, with real-time updates from seekers.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 mb-4">Secure Payments</h4>
            <p className="text-gray-600">
              Integrated with trusted gateways, ensuring safety and recurring donations made easy.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 mb-4">Community Driven</h4>
            <p className="text-gray-600">
              A place where pilgrims share their journey and inspire others to contribute.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 border-t border-gray-300">
        © {new Date().getFullYear()} Pilgrimage Aid. All Rights Reserved.
      </footer>
    </div>
  );
}
