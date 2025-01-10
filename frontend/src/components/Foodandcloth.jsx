import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodAndCloth = () => {
  const [fcDonationData, setFcDonationData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    description: "",
    location: "",
  });
  const url = "http://localhost:4000/app/fc-collection/donate";
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFcDonationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(url, fcDonationData);
      console.log("Server Response:", response.data);

      // Show success notification
      toast.success("Thank you for your generous donation!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Reset form data
      setFcDonationData({
        fullname: "",
        email: "",
        phonenumber: "",
        description: "",
        location: "",
      });
    } catch (error) {
      console.error("Error submitting donation:", error);

      // Show error notification
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 px-5">
      {/* Toastify Container */}
      <ToastContainer />

      {/* Description Section */}
      <div className="container w-1/2 mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-[#b17457] mb-6 text-center">
          Food and Cloth Donations
        </h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          Your donation of food and clothing helps bring warmth and sustenance
          to those affected by disasters and poverty. Join us in making a
          meaningful impact.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Donate Food and Clothes?
          </h2>
          <p className="text-gray-600 mb-4">
            Many families struggle to meet basic needs during crises. Your
            donation ensures they receive the support they deserve, bringing
            hope and relief during tough times.
          </p>
          <button className="bg-[#b17457] text-white py-2 px-4 rounded-md hover:bg-[#9c644a]">
            Learn More
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b17457] mb-6">
          Food and Cloth Collection
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={fcDonationData.fullname}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={fcDonationData.email}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phonenumber"
            value={fcDonationData.phonenumber}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            pattern="[0-9]{10}"
            required
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={fcDonationData.location}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Description of Donation (e.g., 10kg Rice, Jackets)"
            name="description"
            value={fcDonationData.description}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Donate Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodAndCloth;
