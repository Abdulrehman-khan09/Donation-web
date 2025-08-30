import React, { useState } from 'react';
import { Heart, CheckCircle, MapPin, Clock, DollarSign, Users, Star, Zap, Eye } from 'lucide-react';

// Mock Data
const mockApprovedApplications = [
  {
    id: 3,
    name: 'Mohammad Ali',
    age: 52,
    location: 'Damascus, Syria',
    pilgrimage: 'Hajj 2024',
    amount: 4200,
    story: 'After losing my job due to the conflict, I have been unable to fulfill my lifelong dream of Hajj.',
    raised: 2100,
    donors: 15,
    daysLeft: 45,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    verified: true,
    status: 'ongoing'
  },
  {
    id: 5,
    name: 'Hassan Mahmoud',
    age: 41,
    location: 'Rabat, Morocco',
    pilgrimage: 'Hajj 2024',
    amount: 3800,
    story: 'After my father passed away, I took care of family debts and now need help to fulfill his wish for me to perform Hajj.',
    raised: 950,
    donors: 5,
    daysLeft: 67,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    verified: true,
    status: 'pending'
  }
];

const mockDonorHistory = [
  {
    id: 1,
    recipientName: 'Mohammad Ali',
    pilgrimage: 'Hajj 2024',
    amount: 250,
    donatedAt: '2024-01-25',
    status: 'ongoing',
    updates: [
      { date: '2024-01-25', message: 'Donation received - Thank you for your generous support!', type: 'received' },
      { date: '2024-02-01', message: 'Visa application submitted to Saudi embassy', type: 'progress' },
      { date: '2024-02-10', message: 'Starting flight booking process', type: 'progress' }
    ]
  },
  {
    id: 2,
    recipientName: 'Aisha Ibrahim',
    pilgrimage: 'Umrah',
    amount: 150,
    donatedAt: '2024-01-20',
    status: 'completed',
    updates: [
      { date: '2024-01-20', message: 'Donation received - Thank you for your support!', type: 'received' },
      { date: '2024-01-25', message: 'Visa approved successfully', type: 'progress' },
      { date: '2024-02-01', message: 'Journey started - Departed for Mecca', type: 'progress' },
      { date: '2024-02-05', message: 'Umrah completed successfully! May Allah accept our prayers.', type: 'completed' }
    ]
  },
  {
    id: 3,
    recipientName: 'Hassan Mahmoud',
    pilgrimage: 'Hajj 2024',
    amount: 100,
    donatedAt: '2024-01-18',
    status: 'pending',
    updates: [
      { date: '2024-01-18', message: 'Donation received - Thank you!', type: 'received' },
      { date: '2024-01-22', message: 'Waiting for additional funding to reach target amount', type: 'waiting' }
    ]
  }
];

// Donation Card Component
const DonationCard = ({ application }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const progress = (application.raised / application.amount) * 100;

  const handleDonate = (e) => {
    e.preventDefault();
    if (donationAmount && parseFloat(donationAmount) > 0) {
      setSuccessMessage(`Thank you! Your donation of $${donationAmount} has been processed.`);
      setDonationAmount('');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { color: 'bg-yellow-50 text-yellow-700 border-yellow-200', text: 'Pending' },
      ongoing: { color: 'bg-blue-50 text-blue-700 border-blue-200', text: 'In Progress' },
      completed: { color: 'bg-green-50 text-green-700 border-green-200', text: 'Completed' }
    };
    return badges[status] || badges.pending;
  };

  const badge = getStatusBadge(application.status);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={application.image}
          alt={application.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
            {badge.text}
          </span>
        </div>
        {application.verified && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{application.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{application.location}</p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{application.pilgrimage}</span>
          </span>
          {application.status !== 'completed' && application.daysLeft > 0 && (
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{application.daysLeft} days left</span>
            </span>
          )}
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{application.story}</p>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">${application.raised} of ${application.amount}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{Math.round(progress)}% funded</span>
            <span>{application.donors} donors</span>
          </div>
        </div>

        {successMessage && (
          <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
            {successMessage}
          </div>
        )}

        {application.status !== 'completed' ? (
          <div className="space-y-3">
            <form onSubmit={handleDonate} className="flex space-x-2">
              <input
                type="number"
                placeholder="Amount ($)"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Donate
              </button>
            </form>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Quick Donate $50</span>
            </button>
          </div>
        ) : (
          <div className="w-full bg-green-50 text-green-700 py-3 px-4 rounded-lg font-medium text-center flex items-center justify-center space-x-2 border border-green-200">
            <CheckCircle className="h-4 w-4" />
            <span>Journey Completed!</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Donation Tracking Component
const DonationTracking = ({ donorHistory }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-700';
      case 'ongoing':
        return 'bg-blue-50 text-blue-700';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const getUpdateIcon = (type) => {
    switch (type) {
      case 'received':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'progress':
        return <Zap className="h-4 w-4 text-blue-500" />;
      case 'completed':
        return <Star className="h-4 w-4 text-yellow-500" />;
      case 'waiting':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Eye className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTotalDonated = () => {
    return donorHistory.reduce((total, donation) => total + donation.amount, 0);
  };

  const getCompletedCount = () => {
    return donorHistory.filter(donation => donation.status === 'completed').length;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Donated</p>
              <p className="text-2xl font-bold text-blue-600">${getTotalDonated()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed Journeys</p>
              <p className="text-2xl font-bold text-green-600">{getCompletedCount()}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Lives Impacted</p>
              <p className="text-2xl font-bold text-purple-600">{donorHistory.length}</p>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Donation History */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">My Donation History & Tracking</h2>
        </div>
        
        <div className="p-6">
          {donorHistory.length > 0 ? (
            <div className="space-y-6">
              {donorHistory.map((donation) => (
                <div key={donation.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{donation.recipientName}</h3>
                      <p className="text-gray-600">{donation.pilgrimage}</p>
                      <p className="text-sm text-gray-500">Donated on {donation.donatedAt}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${donation.amount}</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(donation.status)}`}>
                        {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Progress Updates:</h4>
                    <div className="space-y-2">
                      {donation.updates.map((update, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          {getUpdateIcon(update.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">{update.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{update.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No donations yet</h3>
              <p className="text-gray-500">Start making a difference by supporting a pilgrimage journey!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Donor Dashboard Component
const DonorDashboard = () => {
  const [activeTab, setActiveTab] = useState('browse');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help fellow believers complete their spiritual journey. Every donation brings someone closer to fulfilling their dream.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 flex border border-gray-200">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'browse'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Eye className="h-4 w-4" />
              <span>Browse Campaigns</span>
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'tracking'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>My Donations</span>
            </button>
          </div>
        </div>

        {activeTab === 'browse' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockApprovedApplications.map((application) => (
              <DonationCard key={application.id} application={application} />
            ))}
          </div>
        )}

        {activeTab === 'tracking' && (
          <DonationTracking donorHistory={mockDonorHistory} />
        )}
      </div>
    </div>
  );
};

export default DonorDashboard;