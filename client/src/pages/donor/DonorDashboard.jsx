import React from "react";

const DonorDashboard = () => {
  const approvedCases = [
    { id: 1, seeker: "Ali Khan", purpose: "Hajj", amount: 1200, date: "2025-07-15" },
    { id: 2, seeker: "Sara Ahmed", purpose: "Umrah", amount: 800, date: "2025-06-10" },
  ];

  const pendingCases = [
    { id: 3, seeker: "Usman Raza", purpose: "Hajj", amount: 1500, date: "2025-08-20" },
  ];

  const donationHistory = [
    { id: 101, project: "Food Drive", amount: 100, date: "2025-05-02" },
    { id: 102, project: "Medical Aid", amount: 200, date: "2025-06-18" },
    { id: 103, project: "Pilgrimage Support", amount: 1200, date: "2025-07-15" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Donor Dashboard</h1>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-lg font-semibold">Total Donations</h2>
          <p className="text-2xl font-bold text-green-600">$1,500</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-lg font-semibold">Approved Cases</h2>
          <p className="text-2xl font-bold text-blue-600">{approvedCases.length}</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-lg font-semibold">Pending Cases</h2>
          <p className="text-2xl font-bold text-yellow-600">{pendingCases.length}</p>
        </div>
      </div>

      {/* Approved Cases */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Approved Cases</h2>
        {approvedCases.length > 0 ? (
          <ul className="space-y-2">
            {approvedCases.map((c) => (
              <li
                key={c.id}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <span>{c.seeker} - {c.purpose}</span>
                <span className="text-green-600 font-semibold">${c.amount}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No approved cases yet.</p>
        )}
      </div>

      {/* Pending Cases */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Pending Cases</h2>
        {pendingCases.length > 0 ? (
          <ul className="space-y-2">
            {pendingCases.map((c) => (
              <li
                key={c.id}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <span>{c.seeker} - {c.purpose}</span>
                <span className="text-yellow-600 font-semibold">${c.amount}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No pending cases right now.</p>
        )}
      </div>

      {/* Donation History */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Donation History</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Project</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50">
                <td className="p-3 border">{d.project}</td>
                <td className="p-3 border">${d.amount}</td>
                <td className="p-3 border">{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorDashboard;
