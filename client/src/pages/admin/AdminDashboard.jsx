import React, { useState } from 'react';
import { Heart, CheckCircle, XCircle, MapPin, Calendar, DollarSign, Eye, FileText, User, Shield, Zap, Clock } from 'lucide-react';

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

// Admin Application Card Component
const AdminApplicationCard = ({ application, onApprove, onReject }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
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
              className="bg-red-50 text-red-700 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <XCircle className="h-4 w-4" />
              <span>Reject</span>
            </button>
            <button
              onClick={() => onApprove(application.id)}
              className="bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors duration-200 flex items-center space-x-2"
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
  const [successMessage, setSuccessMessage] = useState('');

  const approvedDonations = [
    { id: 1, recipientName: 'Mohammad Ali', pilgrimage: 'Hajj 2024', currentStatus: 'ongoing' },
    { id: 2, recipientName: 'Aisha Ibrahim', pilgrimage: 'Umrah', currentStatus: 'completed' },
    { id: 3, recipientName: 'Hassan Mahmoud', pilgrimage: 'Hajj 2024', currentStatus: 'pending' }
  ];

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    if (selectedDonation && newStatus && updateMessage) {
      onUpdateStatus(selectedDonation, newStatus, updateMessage);
      setSuccessMessage('Status updated successfully!');
      setSelectedDonation('');
      setNewStatus('');
      setUpdateMessage('');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

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

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Donation Progress</h3>
      
      {successMessage && (
        <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
          {successMessage}
        </div>
      )}
      
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
              <option value="completed">Completed</option>
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
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(donation.currentStatus)}`}>
                {donation.currentStatus.charAt(0).toUpperCase() + donation.currentStatus.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [successMessage, setSuccessMessage] = useState('');

  const handleApprove = (id) => {
    console.log('Approved application:', id);
    setSuccessMessage('Application approved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleReject = (id) => {
    console.log('Rejected application:', id);
    setSuccessMessage('Application rejected.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const updateDonationStatus = (donationId, newStatus, updateMessage = '') => {
    console.log('Updating donation status:', { donationId, newStatus, updateMessage });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Review and manage pilgrimage applications</p>
          </div>
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
            <span className="font-medium">{mockPendingApplications.length} Pending Reviews</span>
          </div>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
            {successMessage}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-8 w-fit border border-gray-200">
          <button 
            onClick={() => setSelectedTab('pending')}
            className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedTab === 'pending' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Pending Applications
          </button>
          <button 
            onClick={() => setSelectedTab('tracking')}
            className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedTab === 'tracking' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Donation Tracking
          </button>
        </div>

        {/* Tab Content */}
        {selectedTab === 'pending' && (
          <div className="space-y-6">
            {mockPendingApplications.map((application) => (
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
    </div>
  );
};

export default AdminDashboard;