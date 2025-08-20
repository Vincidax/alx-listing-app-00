// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">MyRental</div>

      {/* Search Bar */}
      <div className="my-2 md:my-0 flex-1 mx-4">
        <input
          type="text"
          placeholder="Search for accommodations..."
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation / Types of Accommodation */}
      <nav className="flex items-center space-x-4">
        <ul className="hidden md:flex space-x-4">
          <li>Rooms</li>
          <li>Mansion</li>
          <li>Villa</li>
          <li>Chalet</li>
          <li>Cabin</li>
        </ul>

        {/* Sign In / Sign Up Buttons */}
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
