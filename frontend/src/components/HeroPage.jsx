import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Donation from "./Donation";

const HeroPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#d8d2c2] h-screen flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#b17457]">
            Welcome to Fund Collection for Disaster
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Together, we can make a difference. Your support matters.
          </p>
        </div>
      </section>
      
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">

            <div className="flex-1">
              <img
                src={assets.donation}
                alt="Disaster Relief Cart 1"
                className="w-full h-auto rounded-lg pt-5 pl-20 pr-20 pb-5"
              />
              <div className="flex flex-col justify-start items-start px-20">
                <h3 className="text-xl font-semibold text-gray-800 text-start">
                  Essential Supplies for Affected Families
                </h3>
                <Link to={"donation"} className="items-start">
                  <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300 shadow-md hover:shadow-lg items-start">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Cart Image 2 */}
            <div className="flex-1">
              <img
                src={assets.application}
                alt="Disaster Relief Cart 2"
                className="w-full h-auto rounded-lg p-20 pb-5"
              />
              <div className="flex flex-col justify-start items-start px-20">
                <h3 className="text-xl font-semibold text-gray-800 text-start">
                  Essential Supplies for Affected Families
                </h3>
                <Link to={"donation"} className="items-start">
                  <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300 shadow-md hover:shadow-lg items-start">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
