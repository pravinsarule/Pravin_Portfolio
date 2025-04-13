import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Portfolio</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;