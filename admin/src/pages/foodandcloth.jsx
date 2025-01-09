import React, { useState, useEffect } from "react";

const FoodAndCloth = () => {
  // Sample data for donation details, in a real scenario, this would come from an API.
  const [donations, setDonations] = useState([
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "9876543210",
      location: "Kathmandu",
      description: "10kg Rice, 5 Jackets",
      status: "Pending",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "9876543211",
      location: "Pokhara",
      description: "20kg Rice, 10 Blankets",
      status: "Confirmed",
    },
  ]);

  // Example function to update donation status, simulating an admin action.
  const handleStatusChange = (index, newStatus) => {
    const updatedDonations = [...donations];
    updatedDonations[index].status = newStatus;
    setDonations(updatedDonations);
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold text-[#b17457] mb-6 text-center">
        Admin Panel - Food and Cloth Donations
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{donation.name}</td>
                <td className="px-4 py-2">{donation.email}</td>
                <td className="px-4 py-2">{donation.phone}</td>
                <td className="px-4 py-2">{donation.location}</td>
                <td className="px-4 py-2">{donation.description}</td>
                <td className="px-4 py-2">{donation.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleStatusChange(index, donation.status === "Pending" ? "Confirmed" : "Pending")
                    }
                    className="bg-[#b17457] text-white py-1 px-3 rounded-md hover:bg-[#9c644a] transition duration-300"
                  >
                    {donation.status === "Pending" ? "Confirm" : "Revert"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodAndCloth;
