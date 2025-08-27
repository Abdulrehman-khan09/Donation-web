import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Make Sacred
              <span className="text-yellow-400 block">Journeys Possible</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Help those who dream of pilgrimage but lack the means. Your contribution can transform 
              lives and fulfill spiritual aspirations with complete transparency and dignity.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/donor/login" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center group">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/learn-more" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1,247</div>
                <div className="text-blue-100">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$2.4M</div>
                <div className="text-blue-100">Total Donated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-blue-100">Transparency Score</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-blue-900">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                    <Users className="h-12 w-12 mx-auto mb-3 text-blue-900" />
                    <div className="font-bold text-2xl mb-1">847</div>
                    <div className="text-sm">Active Donors</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                    <Target className="h-12 w-12 mx-auto mb-3 text-blue-900" />
                    <div className="font-bold text-2xl mb-1">23</div>
                    <div className="text-sm">Active Campaigns</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center col-span-2">
                    <Heart className="h-12 w-12 mx-auto mb-3 text-blue-900" />
                    <div className="font-bold text-2xl mb-1">100% Transparent</div>
                    <div className="text-sm">Every donation tracked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;