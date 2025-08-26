// src/data/mockData.js

export const mockPendingApplications = [
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

export const mockApprovedApplications = [
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

export const mockDonorHistory = [
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
  }
];
