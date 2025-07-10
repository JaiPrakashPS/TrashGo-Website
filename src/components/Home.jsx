import React from 'react';
import Navbar from './Navbar'; // Adjust path if needed
import { FaDownload, FaTruck } from 'react-icons/fa';
import heroImage from '../assets/trashgo-hero.jpg'; // adjust path to image
import Footer from './Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 md:py-32">
        {/* Text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            GROUP CLEANUP THAT’S ALL <br /> SMART & GREEN
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-6">
            TrashGo is your smart waste collection and tracking system. Assign tasks, monitor bins, and
            ensure a cleaner city using AI and real-time maps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300">
              <FaDownload />
              Download App
            </button>
            <button className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300">
              Open in Browser
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="TrashGo App Preview"
            className="max-w-lg w-full rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Truck Animation */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute left-0 top-0 animate-truck">
          <FaTruck className="text-6xl text-green-300" />
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes truckMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100vw); }
          }
          .animate-truck {
            animation: truckMove 10s linear infinite;
          }
        `}
      </style>
      <Footer/>
    </div>
  );
}
