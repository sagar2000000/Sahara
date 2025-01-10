import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Donation from "./Donation";

const HeroPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" h-screen flex items-center justify-center text-center relative">
        {/* Transparent Image */}
        <img
          src={assets.hero_img} // Replace with your image path
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />

        <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#b17457] leading-tight">
            Welcome to Our Fundraising Platform
          </h1>

          <blockquote className="mt-8 italic text-lg md:text-2xl text-[#b17457]">
            "The smallest act of kindness is worth more than the grandest
            intention." – Oscar Wilde
          </blockquote>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <Link to={"/donation"}>
              <button className="px-6 py-3 bg-[#b17457] text-white rounded-lg text-lg font-semibold hover:bg-[#8a533a] transition">
                Start Your Contribution
              </button>
            </Link>
            <Link to={"/help"}>
              <button className="px-6 py-3 bg-white text-[#b17457] border border-[#b17457] rounded-lg text-lg font-semibold hover:bg-[#f5ebe1] transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
            {/* Donation Image 1 */}
            <div className="flex-1">
              <img
                src={assets.donation}
                alt="Education Support"
                className="w-full h-auto rounded-lg pt-5 pl-20 pr-20 pb-5"
              />
              <div className="flex flex-col justify-start items-start px-20">
                <h3 className="text-xl font-semibold text-gray-800 text-start">
                  Empowering Lives Through Generosity
                </h3>
                <p className="mt-2 text-gray-600 text-start">
                  Your donation provides vital support for education,
                  healthcare, disaster relief, and community development.
                </p>
                <Link to={"donation"} className="items-start">
                  <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300 shadow-md hover:shadow-lg items-start">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Donation Image 2 */}
            <div className="flex-1">
              <img
                src={assets.application}
                alt="Disaster Relief Fund"
                className="w-full h-auto rounded-lg p-20 pb-5"
              />
              <div className="flex flex-col justify-start items-start px-20">
                <h3 className="text-xl font-semibold text-gray-800 text-start">
                  In Times of Crisis, We Stand Together
                </h3>
                <p className="mt-2 text-gray-600 text-start">
                  Our relief fund is here to help you access critical aid during
                  times of hardship, ensuring that no one faces recovery alone.
                </p>
                <Link to={"donation"} className="items-start">
                  <button className="mt-4 px-6 py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300 shadow-md hover:shadow-lg items-start">
                    Apply Now
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
