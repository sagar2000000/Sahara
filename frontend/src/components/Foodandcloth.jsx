import React, { useState } from "react";

const FoodAndCloth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus(""); // Reset status before submitting

    // Simulate a form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormStatus("Thank you for your generous donation!");
      // Optionally, reset form fields after submission
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setLocation("");
    }, 2000);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 px-5">
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
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              placeholder="Description of Donation (e.g., 10kg Rice, Jackets)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
    </>
  );
};

export default FoodAndCloth;
