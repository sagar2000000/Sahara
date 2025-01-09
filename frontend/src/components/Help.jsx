import React from "react";

const Help = () => {
  return (
    <section id="help" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-600">
              How do I make a donation?
            </h3>
            <p className="text-gray-700 mt-2">
              Click the "Donate Now" button, choose your donation amount, and follow the instructions to donate.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-600">
              How can I apply for assistance?
            </h3>
            <p className="text-gray-700 mt-2">
              Fill out the application form on the "Apply for Assistance" page with your details, and we will get back to you.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-600">
              What types of disasters do you support?
            </h3>
            <p className="text-gray-700 mt-2">
              We support all kinds of natural disasters, including earthquakes, floods, wildfires, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
