import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, MapPin, Calendar } from 'lucide-react';

const CommunityPage =  () => {
  const stories = [
    {
      name: "Ahmad Hassan",
      location: "Detroit, USA",
      date: "Hajj 2023",
      story: "After years of saving, I was still short of funds for Hajj. This platform made my lifelong dream possible. The transparency and dignity with which I was treated will never be forgotten.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Fatima Al-Zahra",
      location: "London, UK", 
      date: "Umrah 2024",
      story: "As a single mother, I thought I'd never afford Umrah. The support I received wasn't just financial—it was emotional and spiritual. I felt the entire community's prayers with me.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ibrahim Khan",
      location: "Karachi, Pakistan",
      date: "Hajj 2023",
      story: "The application process was simple and respectful. Every step was transparent, and I received updates throughout my journey. This platform truly understands the sacred nature of pilgrimage.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stories of Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every journey is sacred, every story is unique. Read how your contributions have 
            transformed lives and fulfilled dreams of spiritual pilgrimage.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="font-bold text-lg text-gray-800">{story.name}</h3>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {story.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {story.date}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{story.story}"
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Be Part of Someone's Sacred Journey</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Your contribution, no matter the size, can make the difference between a dream deferred 
              and a spiritual journey fulfilled. Join our community of compassionate donors today.
            </p>
            <Link to="/donor/login" className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
              Start Contributing Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;