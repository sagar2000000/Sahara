import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#faf7f7] shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-28">
        {/* Logo */}
        <div className="text-[#b17457] font-bold text-4xl">
          <Link to="/">Sahara</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b17457] underline underline-offset-4 font-semibold"
                  : "hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b17457] underline underline-offset-4 font-semibold"
                  : "hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Donation
            </NavLink>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 rounded-md p-4 w-48">
              <NavLink
                to="/donation/fund"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-[#b17457] underline underline-offset-4 font-semibold"
                    : "block px-4 py-2 hover:text-[#b17457] hover:underline hover:underline-offset-4 rounded"
                }
              >
                Fund
              </NavLink>
              <NavLink
                to="/donation/blood"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-[#b17457] underline underline-offset-4 font-semibold"
                    : "block px-4 py-2 hover:text-[#b17457] hover:underline hover:underline-offset-4 rounded"
                }
              >
                Blood
              </NavLink>
              <NavLink
                to="/donation/foodandcloth"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-[#b17457] underline underline-offset-4 font-semibold"
                    : "block px-4 py-2 hover:text-[#b17457] hover:underline hover:underline-offset-4 rounded"
                }
              >
                Food & Cloth
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/application"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b17457] underline underline-offset-4 font-semibold"
                  : "hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Application
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive
                  ? "text-[#b17457] underline underline-offset-4 font-semibold"
                  : "hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Help
            </NavLink>
          </li>
        </ul>

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#b17457] underline underline-offset-4 font-semibold"
                  : "block hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#b17457] underline underline-offset-4 font-semibold"
                  : "block hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/application"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#b17457] underline underline-offset-4 font-semibold"
                  : "block hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Application
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#b17457] underline underline-offset-4 font-semibold"
                  : "block hover:text-[#b17457] hover:underline hover:underline-offset-4"
              }
            >
              Help
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
