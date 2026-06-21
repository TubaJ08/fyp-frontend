import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-200 transition-all duration-300">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-blue-600 tracking-wide hover:scale-105 transition-transform duration-300">
        <Link to="/">HomEase</Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
        <Link to="/explore" className="hover:text-blue-600 transition-colors duration-200">Explore</Link>
        <Link to="/homeDecor" className="hover:text-blue-600 transition-colors duration-200">Home Decor</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">About</Link>
        <Link to="/faq" className="hover:text-blue-600 transition-colors duration-200">FAQ</Link>
        <Link to="/blog" className="hover:text-blue-600 transition-colors duration-200">Blog</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link>
      </div>

      {/* Right - Auth Buttons */}
      <div className="flex items-center space-x-4 text-sm">
        {user ? (
          <>
            <span className="text-gray-700 flex items-center gap-1">
              <FaUserCircle className="text-blue-500 text-lg" />
              <span className="font-medium">
                Welcome, <Link to="/account" className="hover:underline capitalize">{user?.name || 'User'}</Link>
              </span>
            </span>

            <button
              onClick={logout}
              className="px-4 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-200"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;