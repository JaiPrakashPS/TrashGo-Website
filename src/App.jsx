import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">My Tailwind App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        
        {/* Card */}
        <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
          <p className="mb-4">This is a sample card built with Tailwind CSS.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-200">
            Click Me
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        &copy; 2025 My Tailwind App
      </footer>
    </div>
  );
}
