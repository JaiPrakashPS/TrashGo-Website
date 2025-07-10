import React from 'react';
import Navbar from './Navbar'; // Adjust if your Navbar is in another folder
import { FaDownload, FaTruck } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-fade-in">
          Welcome to TrashGo ♻️
        </h1>
        <p className="text-lg md:text-xl text-green-700 max-w-3xl mx-auto mb-6 animate-fade-in-slow">
          TrashGo is a smart waste collection and tracking system that uses real-time data to optimize urban waste management. Monitor bins, assign tasks to staff, and ensure efficient garbage collection—powered by AI and maps!
        </p>

        {/* Download Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300 shadow-lg animate-fade-in-slower"
        >
          <FaDownload />
          Download App
        </a>
      </section>

      {/* Garbage Truck Animation */}
      {/* Garbage Truck Animation */}
<div className="overflow-x-hidden py-12 relative h-20">
  <div className="absolute left-0 top-0 animate-truck">
    <FaTruck className="text-6xl text-green-800" />
  </div>
</div>

    </div>
  );
}
