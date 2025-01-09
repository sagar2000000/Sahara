import React, { useState } from "react";
import axios from "axios";

const Application = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const url = "http://localhost:4000/app/application/submission"
  const [applicationData, setApplicationData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    fundamount: "",
    reason: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus(""); // Reset status before submitting

    try {
      const response = await axios.post(url, applicationData);
      console.log(response)
      setIsLoading(false);
      setFormStatus("Application submitted successfully!");
      // Reset the form fields after successful submission
      setApplicationData({
        fullname: "",
        email: "",
        phonenumber: "",
        fundamount: "",
        reason: "",
        location: "",
      });
    } catch (error) {
      setIsLoading(false);
      setFormStatus("Failed to submit the application. Please try again.");
    }
  };

  return (
    <section id="application" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 px-5">
        {/* Description Section */}
        <div className="lg:w-5/12 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b17457] mb-6">
            Read Me!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            If you or someone you know is in need of assistance, please fill out
            the application form below. Our team will review your request and
            get back to you as soon as possible. Your details will remain
            confidential and used solely for the purpose of providing
            assistance.
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b17457] mb-6">
            Apply for Assistance
          </h2>
          {formStatus && (
            <p className={`mb-4 ${formStatus.includes("success") ? "text-green-500" : "text-red-500"} font-semibold`}>
              {formStatus}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={applicationData.fullname}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={applicationData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              placeholder="Reason for Assistance"
              name="reason"
              value={applicationData.reason}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            ></textarea>
            <input
              type="number"
              placeholder="Fund Amount"
              name="fundamount"
              value={applicationData.fundamount}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={applicationData.location}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phonenumber"
              value={applicationData.phonenumber}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              pattern="[0-9]{10}"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Application;
