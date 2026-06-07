import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopRatedSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#d0e5ff] to-[#a7c7ff] py-16 rounded-3xl mx-4 my-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Top-Rated Professionals
          </h2>
          <p className="text-gray-700 mb-6">
            Find highly-rated experts for various home services. Browse profiles, read reviews, and select the best fit for your needs.
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Browse expert
          </button>
        </div>

        {/* Right Image + Info Card */}
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Syalan Dhiya"
            className="w-full max-w-sm rounded-xl shadow-xl"
          />
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-4 flex items-center gap-4 w-[85%]">
            <div>
              <h3 className="font-semibold text-gray-900">Syalan Dhiya</h3>
              <p className="text-sm text-gray-500">Home Care</p>
              <p className="text-blue-500 font-bold mt-1">$17.00 <span className="text-sm text-gray-500 font-normal">/ Hr</span></p>
            </div>
            <div className="ml-auto text-right text-sm text-gray-700">
              <div className="flex items-center justify-end text-yellow-400">
                <FaStar className="mr-1" /> 4.9
              </div>
              <p className="text-gray-500">(190)</p>
              <p className="text-gray-400 text-xs">0.9 km</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TopRatedSection;
