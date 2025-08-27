import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Globe, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600 mr-2" />
            <Link to="/" className="text-2xl font-bold text-gray-800">PilgrimageGive</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={'/community'} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Stories
            </Link>
            <Link to={'learn-more'} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About Us
            </Link>
            <Link to={'/contact'} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Globe className="h-5 w-5 text-gray-500" />
              <select className="border-none bg-transparent text-gray-700 focus:outline-none">
                <option>EN</option>
                <option>العربية</option>
                <option>اردو</option>
              </select>
            </div>
            <Link to="/donor/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Donor Login
            </Link>
            <Link to="/seeker/login" className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-medium flex items-center">
              <User className="h-5 w-5 mr-2" />
              Seeker Login
            </Link>
            <Link to="/admin/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Admin Login   
              </Link>


          
          </nav>

          
        </div>

     
      </div>
    </header>
  );
};

export default Header;