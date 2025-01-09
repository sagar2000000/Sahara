import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#faf7f7] shadow-md fixed w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center py-6 px-28">
        {/* Logo */}
        <div className="text-[#b17457] font-bold text-4xl">
          <Link to="/">Sahara</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center text-lg">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Home
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to={"/donation"}
              className="hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Donation
            </NavLink>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 rounded-md p-4 w-48">
              <NavLink
                to={"/donation/fund"}
                className="block px-4 py-2 hover:text-[#b17457] hover:underline hover:underline-offset-4 rounded"
              >
                Fund
              </NavLink>
              <NavLink
                to={"/donation/blood"}
                className="block px-4 py-2 hover:text-[#b17457] hover:underline hover:underline-offset-4 rounded"
              >
                Blood
              </NavLink>
              <NavLink
                to={"/donation/foodandcloth"}
                className="block px-4 py-2 hover:text-[#b17457] hover:underline hover:underline-offset-4 rounded"
              >
                Food & Cloth
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to={"/application"}
              className="hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Application
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/help"}
              className="hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Help
            </NavLink>
          </li>
        </ul>

        {/* User Icon */}
        {/* <div className="hidden md:flex items-center">
          <div className="relative group cursor-pointer p-2 rounded-full bg-gradient-to-tr from-purple-500 to-purple-700 shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white transition-transform transform group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"
              ></path>
            </svg>
            <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-3 py-1 shadow-lg transition duration-300">
              Profile
            </div>
          </div>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md space-y-4 py-4 px-6 text-gray-700 font-medium">
          <li>
            <a
              href="#home"
              className="block hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#donation"
              className="block hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Donation
            </a>
          </li>
          <li>
            <a
              href="#application"
              className="block hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Application
            </a>
          </li>
          <li>
            <a
              href="#help"
              className="block hover:text-[#b17457] hover:underline hover:underline-offset-4"
            >
              Help
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
