import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">TrashGo ♻️</h2>
          <p className="text-green-300">
            Making urban waste management smarter, cleaner, and greener.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-green-300 text-xl">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-green-400 text-sm mt-15">
        &copy; {new Date().getFullYear()} TrashGo. All rights reserved.
      </div>
    </footer>
  );
}
