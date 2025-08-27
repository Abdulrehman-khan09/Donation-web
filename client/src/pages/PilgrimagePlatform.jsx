import React, { useState } from 'react';
import { Heart, Upload, CheckCircle, XCircle, MapPin, Calendar, DollarSign, Users, Star, ArrowRight, Eye, FileText, Image, User, Shield, Zap, Clock, AlertCircle } from 'lucide-react';

// Mock Data
const mockPendingApplications = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    age: 45,
    location: 'Cairo, Egypt',
    pilgrimage: 'Hajj 2024',
    amount: 4500,
    story: 'I have been saving for 15 years but medical expenses for my mother have made it impossible to complete my Hajj journey.',
    documents: ['income_certificate.pdf', 'medical_bills.jpg', 'id_card.jpg'],
    submittedAt: '2024-01-15',
    status: 'pending'
  },
  {
    id: 2,
    name: 'Fatima Al-Zahra',
    age: 38,
    location: 'Karachi, Pakistan',
    pilgrimage: 'Umrah',
    amount: 1800,
    story: 'As a widow raising three children, I dream of performing Umrah but cannot afford the journey.',
    documents: ['widow_certificate.pdf', 'salary_slip.jpg', 'family_photo.jpg'],
    submittedAt: '2024-01-20',
    status: 'pending'
  }
];

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
    status: 'done',
    updates: [
      { date: '2024-01-20', message: 'Donation received - Thank you for your support!', type: 'received' },
      { date: '2024-01-25', message: 'Visa approved successfully', type: 'progress' },
      { date: '2024-02-01', message: 'Journey started - Departed for Mecca', type: 'progress' },
      { date: '2024-02-05', message: 'Umrah completed successfully! May Allah accept our prayers.', type: 'completed' }
    ]
  },
  {
    id: 3,
    name: 'Hassan Mahmoud',
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

// Navigation Component
const Navigation = ({ activeView, setActiveView }) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PilgrimAid
            </span>
          </div>
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {[
              { key: 'seeker', label: 'Apply for Support', icon: User },
              { key: 'admin', label: 'Admin Panel', icon: Shield },
              { key: 'donor', label: 'Donate Now', icon: Heart }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeView === key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Seeker Application Form Component
const SeekerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    pilgrimage: 'hajj',
    amount: '',
    story: '',
    documents: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files.map(f => f.name)]
    }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your application. Our team will review it within 2-3 business days.
            You will receive an email notification once the review is complete.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Apply for Pilgrimage Support
        </h1>
        <p className="text-lg text-gray-600">
          Let us help you fulfill your spiritual journey. Fill out the form below with your details.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age *
              </label>
              <input
                type="number"
                required
                value={formData.age}
                onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your age"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="City, Country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilgrimage Type *
              </label>
              <select
                required
                value={formData.pilgrimage}
                onChange={(e) => setFormData(prev => ({...prev, pilgrimage: e.target.value}))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="hajj">Hajj</option>
                <option value="umrah">Umrah</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Amount (USD) *
            </label>
            <input
              type="number"
              required
              value={formData.amount}
              onChange={(e) => setFormData(prev => ({...prev, amount: e.target.value}))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter amount needed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Story *
            </label>
            <textarea
              required
              rows={4}
              value={formData.story}
              onChange={(e) => setFormData(prev => ({...prev, story: e.target.value}))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your situation and why you need support..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Supporting Documents *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                Upload income certificate, medical bills, ID, or other supporting documents
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
                id="documents"
              />
              <label
                htmlFor="documents"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer inline-block"
              >
                Choose Files
              </label>
              {formData.documents.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Uploaded files:</p>
                  <ul className="text-sm text-gray-600">
                    {formData.documents.map((doc, index) => (
                      <li key={index} className="flex items-center justify-center space-x-2">
                        <FileText className="h-4 w-4" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Heart className="h-5 w-5" />
            <span>Submit Application</span>
          </button>
        </form>
      </div>
    </div>
  );
};

// Admin Application Card Component
const AdminApplicationCard = ({ application, onApprove, onReject }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{application.name}</h3>
                <p className="text-gray-600">{application.age} years old • {application.location}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{application.pilgrimage}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">${application.amount}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{application.submittedAt}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{application.story}</p>

            {showDetails && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Supporting Documents:</h4>
                <div className="space-y-2">
                  {application.documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{doc}</span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
          >
            <Eye className="h-4 w-4" />
            <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
          </button>

          <div className="flex space-x-3">
            <button
              onClick={() => onReject(application.id)}
              className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <XCircle className="h-4 w-4" />
              <span>Reject</span>
            </button>
            <button
              onClick={() => onApprove(application.id)}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Approve</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Donation Status Manager Component
const DonationStatusManager = ({ onUpdateStatus }) => {
  const [selectedDonation, setSelectedDonation] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const approvedDonations = [
    { id: 1, recipientName: 'Mohammad Ali', pilgrimage: 'Hajj 2024', currentStatus: 'ongoing' },
    { id: 2, recipientName: 'Aisha Ibrahim', pilgrimage: 'Umrah', currentStatus: 'done' },
    { id: 3, recipientName: 'Hassan Mahmoud', pilgrimage: 'Hajj 2024', currentStatus: 'pending' }
  ];

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    if (selectedDonation && newStatus && updateMessage) {
      onUpdateStatus(selectedDonation, newStatus, updateMessage);
      setSelectedDonation('');
      setNewStatus('');
      setUpdateMessage('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'done':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Donation Progress</h3>
      
      <form onSubmit={handleStatusUpdate} className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Donation
            </label>
            <select
              value={selectedDonation}
              onChange={(e) => setSelectedDonation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose donation...</option>
              {approvedDonations.map((donation) => (
                <option key={donation.id} value={donation.id}>
                  {donation.recipientName} - {donation.pilgrimage}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Status
            </label>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select status...</option>
              <option value="pending">Pending</option>
              <option value="ongoing">Ongoing</option>
              <option value="done">Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Update Message
            </label>
            <input
              type="text"
              value={updateMessage}
              onChange={(e) => setUpdateMessage(e.target.value)}
              placeholder="e.g., Visa approved successfully"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Zap className="h-4 w-4" />
          <span>Send Update</span>
        </button>
      </form>

      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-3">Current Donations Status</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {approvedDonations.map((donation) => (
            <div key={donation.id} className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-900">{donation.recipientName}</h5>
              <p className="text-sm text-gray-600">{donation.pilgrimage}</p>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(donation.currentStatus)}`}>
                {donation.currentStatus.charAt(0).toUpperCase() + donation.currentStatus.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard = ({ applications }) => {
  const [selectedTab, setSelectedTab] = useState('pending');

  const handleApprove = (id) => {
    console.log('Approved application:', id);
  };

  const handleReject = (id) => {
    console.log('Rejected application:', id);
  };

  const updateDonationStatus = (donationId, newStatus, updateMessage = '') => {
    console.log('Updating donation status:', { donationId, newStatus, updateMessage });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Review and manage pilgrimage applications</p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
          <span className="font-medium">{applications.length} Pending Reviews</span>
        </div>
      </div>

      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 w-fit">
        <button 
          onClick={() => setSelectedTab('pending')}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedTab === 'pending' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Pending Applications
        </button>
        <button 
          onClick={() => setSelectedTab('tracking')}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedTab === 'tracking' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Donation Tracking
        </button>
      </div>

      {selectedTab === 'pending' && (
        <div className="space-y-6">
          {applications.map((application) => (
            <AdminApplicationCard 
              key={application.id} 
              application={application} 
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      )}

      {selectedTab === 'tracking' && (
        <DonationStatusManager onUpdateStatus={updateDonationStatus} />
      )}
    </div>
  );
};

// Donation Card Component
const DonationCard = ({ application }) => {
  const progress = (application.raised / application.amount) * 100;

  const getStatusBadge = (status) => {
    const badges = {
      pending: { color: 'bg-yellow-100 text-yellow-800', text: 'Pending' },
      ongoing: { color: 'bg-blue-100 text-blue-800', text: 'In Progress' },
      done: { color: 'bg-green-100 text-green-800', text: 'Completed' }
    };
    return badges[status] || badges.pending;
  };

  const badge = getStatusBadge(application.status);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={application.image}
          alt={application.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>
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
          {application.status !== 'done' && application.daysLeft > 0 && (
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{Math.round(progress)}% funded</span>
            <span>{application.donors} donors</span>
          </div>
        </div>

        {application.status !== 'done' ? (
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
            <Heart className="h-4 w-4" />
            <span>Donate Now</span>
          </button>
        ) : (
          <div className="w-full bg-green-100 text-green-800 py-3 px-4 rounded-lg font-medium text-center flex items-center justify-center space-x-2">
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
      case 'done':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
    return donorHistory.filter(donation => donation.status === 'done').length;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Donated</p>
              <p className="text-2xl font-bold">${getTotalDonated()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completed Journeys</p>
              <p className="text-2xl font-bold">{getCompletedCount()}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Lives Impacted</p>
              <p className="text-2xl font-bold">{donorHistory.length}</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Donation History */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className=" px-6 py-4">
          <h2 className="text-xl font-bold text-white">My Donation History & Tracking</h2>
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

// Donor Dashboard Component
const DonorDashboard = ({ applications, donorHistory }) => {
  const [activeTab, setActiveTab] = useState('browse');

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Make a Difference Today
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help fellow believers complete their spiritual journey. Every donation brings someone closer to fulfilling their dream.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'browse'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Eye className="h-4 w-4" />
            <span>Browse Campaigns</span>
          </button>
          <button
            onClick={() => setActiveTab('tracking')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'tracking'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Heart className="h-4 w-4" />
            <span>My Donations</span>
          </button>
        </div>
      </div>

      {activeTab === 'browse' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <DonationCard key={application.id} application={application} />
          ))}
        </div>
      )}

      {activeTab === 'tracking' && (
        <DonationTracking donorHistory={donorHistory} />
      )}
    </div>
  );
};

// Main App Component
const PilgrimagePlatform = () => {
  const [activeView, setActiveView] = useState('donor');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'seeker' && <SeekerForm />}
        {activeView === 'admin' && <AdminDashboard applications={mockPendingApplications} />}
        {activeView === 'donor' && (
          <DonorDashboard 
            applications={mockApprovedApplications} 
            donorHistory={mockDonorHistory} 
          />
        )}
      </div>
    </div>
  );
};

export default PilgrimagePlatform;