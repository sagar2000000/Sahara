import React, { useState } from "react";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [fundAmount, setFundAmount] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus(""); // Reset status before submitting

    // Simulate a form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormStatus("Application submitted successfully!");
      // Optionally, you could reset the form fields here after successful submission
    }, 2000);
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
            <p className="text-green-500 font-semibold mb-4">{formStatus}</p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              placeholder="Reason for Assistance"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            ></textarea>
            <input
              type="number"
              placeholder="Fund Amount"
              value={fundAmount}
              onChange={(e) => setFundAmount(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
