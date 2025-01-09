import React, { useState } from "react";

const Applications = () => {
  // Example application data (this would typically come from a backend API)
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      reason: "Medical expenses for surgery",
      fundAmount: "5000",
      location: "Kathmandu, Nepal",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      reason: "Emergency relief after a flood",
      fundAmount: "10000",
      location: "Pokhara, Nepal",
      phone: "9812345678",
    },
  ]);

  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-[#b17457] mb-6 text-center">
          Admin Panel - Applications
        </h1>

        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-[#b17457] text-white">
              <tr>
                <th className="py-4 px-6">#</th>
                <th className="py-4 px-6">Full Name</th>
                <th className="py-4 px-6">Email</th>
                <th className="py-4 px-6">Reason</th>
                <th className="py-4 px-6">Fund Amount (NPR)</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Phone</th>
                <th className="py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((app, index) => (
                  <tr
                    key={app.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">{app.name}</td>
                    <td className="py-4 px-6">{app.email}</td>
                    <td className="py-4 px-6">{app.reason}</td>
                    <td className="py-4 px-6">{app.fundAmount}</td>
                    <td className="py-4 px-6">{app.location}</td>
                    <td className="py-4 px-6">{app.phone}</td>
                    <td className="py-4 px-6">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 mr-2">
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="py-4 px-6 text-center text-gray-500"
                  >
                    No applications available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Applications;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Applications = () => {
//   const [applications, setApplications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch applications from the database
//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get("/api/applications"); // Adjust endpoint as needed
//         setApplications(response.data); // Assumes API sends an array of applications
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch applications.");
//         setIsLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await axios.post(`/api/applications/${id}/approve`);
//       alert("Application approved!");
//       // Optionally update the UI after approval
//       setApplications((prev) =>
//         prev.map((app) =>
//           app.id === id ? { ...app, status: "approved" } : app
//         )
//       );
//     } catch (err) {
//       alert("Failed to approve the application.");
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.post(`/api/applications/${id}/reject`);
//       alert("Application rejected!");
//       // Optionally update the UI after rejection
//       setApplications((prev) =>
//         prev.map((app) =>
//           app.id === id ? { ...app, status: "rejected" } : app
//         )
//       );
//     } catch (err) {
//       alert("Failed to reject the application.");
//     }
//   };

//   if (isLoading) {
//     return <p className="text-center py-6">Loading applications...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500 py-6">{error}</p>;
//   }

//   return (
//     <section className="bg-gray-50 py-10 px-6">
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold text-[#b17457] mb-6 text-center">
//           Admin Panel - Applications
//         </h1>

//         <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
//           <table className="min-w-full text-sm text-left text-gray-700">
//             <thead className="bg-[#b17457] text-white">
//               <tr>
//                 <th className="py-4 px-6">#</th>
//                 <th className="py-4 px-6">Full Name</th>
//                 <th className="py-4 px-6">Email</th>
//                 <th className="py-4 px-6">Reason</th>
//                 <th className="py-4 px-6">Fund Amount (NPR)</th>
//                 <th className="py-4 px-6">Location</th>
//                 <th className="py-4 px-6">Phone</th>
//                 <th className="py-4 px-6">Status</th>
//                 <th className="py-4 px-6">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.length > 0 ? (
//                 applications.map((app, index) => (
//                   <tr
//                     key={app.id}
//                     className={`${
//                       index % 2 === 0 ? "bg-gray-100" : "bg-white"
//                     }`}
//                   >
//                     <td className="py-4 px-6">{index + 1}</td>
//                     <td className="py-4 px-6">{app.name}</td>
//                     <td className="py-4 px-6">{app.email}</td>
//                     <td className="py-4 px-6">{app.reason}</td>
//                     <td className="py-4 px-6">{app.fundAmount}</td>
//                     <td className="py-4 px-6">{app.location}</td>
//                     <td className="py-4 px-6">{app.phone}</td>
//                     <td className="py-4 px-6">
//                       <span
//                         className={`px-2 py-1 rounded-lg text-white ${
//                           app.status === "approved"
//                             ? "bg-green-500"
//                             : app.status === "rejected"
//                             ? "bg-red-500"
//                             : "bg-gray-400"
//                         }`}
//                       >
//                         {app.status || "Pending"}
//                       </span>
//                     </td>
//                     <td className="py-4 px-6">
//                       <button
//                         onClick={() => handleApprove(app.id)}
//                         className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 mr-2"
//                       >
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleReject(app.id)}
//                         className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
//                       >
//                         Reject
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="9"
//                     className="py-4 px-6 text-center text-gray-500"
//                   >
//                     No applications available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Applications;
