'use client';
import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3 text-2xl font-bold">
          <FaLeaf className="text-white animate-pulse text-3xl" />
          <span className="tracking-wide font-extrabold">TrashGo</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 font-medium text-base items-center">
          <li className="relative group">
            <a href="#" className="hover:text-green-200 transition duration-300 cursor-pointer py-2 px-1">
              Download
            </a>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-green-200 transition duration-300 cursor-pointer py-2 px-1">
              Features
            </a>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-green-200 transition duration-300 cursor-pointer py-2 px-1">
              Discover
            </a>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-green-200 transition duration-300 cursor-pointer py-2 px-1">
              Product
            </a>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-green-200 transition duration-300 cursor-pointer py-2 px-1">
              Contact Us
            </a>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></div>
          </li>
        </ul>

        {/* Log In Button */}
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-50 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
          Log In
        </button>
      </div>
    </nav>
  );
}