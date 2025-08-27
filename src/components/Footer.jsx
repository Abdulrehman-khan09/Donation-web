import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">PilgrimageGive</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Connecting generous hearts with sacred dreams. Making pilgrimage accessible 
              to all through transparency, dignity, and community support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

        {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
                      <li><Link to="/Learn-more" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                      <li><Link to="/seeker-form" className="text-gray-300 hover:text-white transition-colors">Apply for Support</Link></li>
                    </ul>
                  </div>

                {/* Support */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                              <li><Link to="/donor-dashboard" className="text-gray-300 hover:text-white transition-colors">Donor Dashboard</Link></li>
                              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ's</Link></li>
                              
                              
                              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Support</Link></li>
                            </ul>
                          </div>

                          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300">support@pilgrimagegive.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-300">123 Charity Lane<br />Hope City, HC 12345</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-gray-400 mr-3" />
                <select className="bg-transparent border-none text-gray-300 focus:outline-none">
                  <option className="bg-gray-800">English</option>
                  <option className="bg-gray-800">العربية</option>
                  <option className="bg-gray-800">اردو</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PilgrimageGive. All rights reserved. | Charity Registration: 123456789
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Heart className="h-4 w-4 text-red-400 mr-1" />
                Made with love for the community
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;