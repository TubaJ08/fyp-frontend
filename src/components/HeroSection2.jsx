'use client';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaStar,
  FaCalendarCheck,
  FaUserShield,
  FaClock,
  FaSearch,
} from "react-icons/fa";
import services from '../utils/data/servicesList';
import { motion } from 'framer-motion';

const HeroSectionn = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = services.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSelect = (service) => {
    setSearch('');
    setSuggestions([]);
    navigate(service.path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerInput = search.trim().toLowerCase();
    if (!lowerInput) return;

    const matched = services.find((item) =>
      item.name.toLowerCase().includes(lowerInput)
    );

    if (matched) {
      navigate(matched.path);
    } else {
      alert("❌ No matching service found!");
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* Left Content */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium inline-block">
              Trusted Since 2024
            </span>
          </div>

          {/* 👇 Animated Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight space-y-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
            >
              Professional
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-blue-600"
            >
              Home Services
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block"
            >
              You Can Trust
            </motion.span>
          </motion.h1>

          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            From emergency repairs to routine maintenance, our licensed professionals keep your home running smoothly 24/7.
            Quality work, fair prices, guaranteed satisfaction.
          </p>

          {/* 🔍 Search */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 flex-wrap">
            <form onSubmit={handleSubmit} className="relative w-full sm:w-1/2" autoComplete="off">
              <div className="flex">
                <input
                  type="text"
                  value={search}
                  onChange={handleChange}
                  placeholder="Search service"
                  className="flex-1 py-3 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-white p-3 rounded-r-full border border-l-0 border-gray-300"
                >
                  <FaSearch className="text-blue-500" />
                </button>
              </div>
              {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white shadow-lg rounded w-full mt-1 text-left max-h-60 overflow-y-auto">
                  {suggestions.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleSelect(item)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>

            <a
              href="tel:03051234567"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 whitespace-nowrap"
            >
              <FaPhoneAlt className="text-sm" /> Call 0305-1234567
            </a>
          </div>

          {/* 📊 Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.6 }
              }
            }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-700"
          >
            <div>
              <div className="text-lg font-bold">500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-lg font-bold">1+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-lg font-bold">24/7</div>
              <div className="text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-lg font-bold">4.9/5</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </motion.div>
        </div>

        {/* 🧾 Quote Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full max-w-md"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Get Your Free Quote
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <FaStar className="text-green-500 mt-1 mr-2" />
                No obligation estimate
              </li>
              <li className="flex items-start">
                <FaCalendarCheck className="text-green-500 mt-1 mr-2" />
                Same-day appointments available
              </li>
              <li className="flex items-start">
                <FaUserShield className="text-green-500 mt-1 mr-2" />
                Licensed & insured professionals
              </li>
              <li className="flex items-start">
                <FaClock className="text-green-500 mt-1 mr-2" />
                100% satisfaction guarantee
              </li>
            </ul>
            <button
              onClick={() => navigate("/services/quote")}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow"
            >
              Get Free Quote Now →
            </button>
          </div>

          {/* Floating Star */}
          <div className="absolute top-[-20px] right-[-20px] bg-blue-600 text-white p-3 rounded-full shadow-lg">
            <FaStar className="text-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionn;
