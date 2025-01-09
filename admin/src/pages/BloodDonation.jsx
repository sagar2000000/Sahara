import React, { useState, useEffect } from 'react';

const BloodDonation = () => {
  const [donations, setDonations] = useState([]);
  const [filters, setFilters] = useState({
    bloodType: '',
    status: '',
    fromDate: '',
    toDate: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch blood donations from an API or a local mock data
    const fetchedDonations = [
      { id: 1, name: 'John Doe', bloodType: 'A+', date: '2025-01-01', status: 'Pending' },
      { id: 2, name: 'Jane Doe', bloodType: 'O-', date: '2025-01-05', status: 'Approved' },
      // Add more mock data here...
    ];
    setDonations(fetchedDonations);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setDonations(donations.map(donation => donation.id === id ? { ...donation, status: newStatus } : donation));
  };

  const handleSearch = () => {
    // Filter donations based on search term and filters
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-[#b17457]">Blood Donation Management</h1>
      </header>

      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by donor name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        />
        <select
          onChange={(e) => setFilters({ ...filters, bloodType: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="O-">O-</option>
          {/* More blood types */}
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="date"
          placeholder="From Date"
          value={filters.fromDate}
          onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        />
        <input
          type="date"
          placeholder="To Date"
          value={filters.toDate}
          onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#b17457] text-white rounded-md hover:bg-[#955e45] w-full md:w-auto"
        >
          Search
        </button>
      </div>

      {/* Donation Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#b17457] text-white">
            <tr>
              <th className="px-6 py-3 text-left">Donor Name</th>
              <th className="px-6 py-3 text-left">Blood Type</th>
              <th className="px-6 py-3 text-left">Date of Donation</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map(donation => (
              <tr key={donation.id} className="border-b">
                <td className="px-6 py-3">{donation.name}</td>
                <td className="px-6 py-3">{donation.bloodType}</td>
                <td className="px-6 py-3">{donation.date}</td>
                <td className="px-6 py-3">{donation.status}</td>
                <td className="px-6 py-3 space-x-2">
                  <button
                    onClick={() => handleStatusChange(donation.id, 'Approved')}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(donation.id, 'Rejected')}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => console.log(`View details for ${donation.name}`)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Donation Form */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Donation</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Donor Name"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md w-full">
            <option value="A+">A+</option>
            <option value="O-">O-</option>
            {/* More blood types */}
          </select>
          <input
            type="number"
            placeholder="Quantity"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="date"
            placeholder="Donation Date"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-3 bg-[#b17457] text-white rounded-md hover:bg-[#955e45]"
            >
              Save Donation
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodDonation;
