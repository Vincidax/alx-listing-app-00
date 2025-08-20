import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-6 text-center text-gray-700 mt-8">
      <p>© {new Date().getFullYear()} MyRental. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
