import React, { useState } from "react";
import axios from "axios";

const Blood = () => {
  const [bloodCollectionData, setBloodCollectionData] = useState({
    fullname: "",
    bloodgroup: "",
    gender: "",
    age: "",
    location: "",
    phonenumber: "",
    email: "",
  });

  const url = "http://localhost:4000/app/blood/donate";
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBloodCollectionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus("");

    try {
      const response = await axios.post(url, bloodCollectionData);
      console.log("Server Response:", response.data);

      setFormStatus("Application submitted successfully!");
      // Reset form fields after submission
      setBloodCollectionData({
        fullname: "",
        bloodgroup: "",
        gender: "",
        age: "",
        location: "",
        phonenumber: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 px-5 my-10">
      {/* Description Section */}
      <div className="container w-1/2 mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Blood Donation Campaigns
        </h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          Your blood donation can save lives. Join our efforts to help those
          in need of blood transfusions.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Donate Blood?
          </h2>
          <p className="text-gray-600 mb-4">
            Blood is essential for surgeries, cancer treatment, chronic
            illnesses, and traumatic injuries. Every donation can save up to
            three lives.
          </p>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          Blood Collection
        </h2>
        {formStatus && (
          <p
            className={`${
              formStatus.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            } font-semibold mb-4`}
          >
            {formStatus}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={bloodCollectionData.fullname}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <select
            name="bloodgroup"
            value={bloodCollectionData.bloodgroup}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <select
            name="gender"
            value={bloodCollectionData.gender}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={bloodCollectionData.age}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            min="1"
            required
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={bloodCollectionData.location}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phonenumber"
            value={bloodCollectionData.phonenumber}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            pattern="[0-9]{10}"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={bloodCollectionData.email}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blood;
