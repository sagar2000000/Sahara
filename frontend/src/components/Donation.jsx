import React from "react";
import { Link } from "react-router-dom";

const Donation = () => {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#b17457]">
          Make a Donation
        </h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Choose the type of donation you want to contribute to. Every act of kindness counts.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fund Donation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Fund Donation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#b17457]">Fund Donation</h3>
              <p className="mt-2 text-gray-700">
                Help provide financial assistance to those in need.
              </p>
              <Link to="/donation/fund">
                <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:shadow-lg transition duration-300">
                  Donate to Fund
                </button>
              </Link>
            </div>
          </div>

          {/* Blood Donation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blood Donation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#b17457]">Blood Donation</h3>
              <p className="mt-2 text-gray-700">
                Your blood can save lives. Be a hero for someone in need.
              </p>
              <Link to="/donation/blood">
                <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:shadow-lg transition duration-300">
                  Donate Blood
                </button>
              </Link>
            </div>
          </div>

          {/* Food and Cloth Donation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Food and Cloth Donation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#b17457]">
                Food & Cloth Donation
              </h3>
              <p className="mt-2 text-gray-700">
                Provide essential supplies to those affected by disasters.
              </p>
              <Link to="/donation/foodandcloth">
                <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:shadow-lg transition duration-300">
                  Donate Food & Cloth
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
