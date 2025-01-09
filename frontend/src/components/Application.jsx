import React, { useState } from "react";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [urgency, setUrgency] = useState("normal");
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
        <div className="lg:w-5/12 text-center lg:text-left ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b17457] mb-6">
            Read me !
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            If you or someone you know is in need of assistance, please fill out
            the application form below. Our team will review your request and
            get back to you as soon as possible. We are here to help during
            difficult times, whether for emergency relief, financial support, or
            other necessary services. Your details will remain confidential and
            used solely for the purpose of providing assistance.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We will carefully review your KYC documents and reach out to you
            shortly for further steps.
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
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              pattern="[0-9]{10}"
              required
            />
            <select
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            <textarea
              placeholder="Describe Your Situation"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            ></textarea>
            <label htmlFor="urgency" className="text-left block mb-2">
              Urgency Level
            </label>
            <select
              id="urgency"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="critical">Critical</option>
            </select>
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
