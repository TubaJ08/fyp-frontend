import React from 'react';
import { FaStar } from 'react-icons/fa';

const TrustedProviderSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#d0e5ff] to-[#a7c7ff] py-16 rounded-3xl mx-4 my-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left - Image & Info Card */}
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/22.jpg"
            alt="Andik Bengkel"
            className="w-full max-w-sm rounded-2xl shadow-2xl mx-auto"
          />

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-md p-4 w-[90%] flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900">Andik Bengkel</h3>
              <p className="text-sm text-gray-500">Mechanic</p>
              <p className="text-blue-500 font-semibold mt-1">$35.00 <span className="text-xs text-gray-500">/ Hr</span></p>
            </div>
            <div className="text-right text-sm">
              <div className="flex items-center justify-end text-yellow-400">
                <FaStar className="mr-1" /> 4.9
              </div>
              <p className="text-gray-500">(189)</p>
              <p className="text-gray-400 text-xs">10 km</p>
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect with Trusted <br /> Service Providers
          </h2>
          <p className="text-gray-700 mb-6">
            Get connected with reputable professionals across different fields. Ensure quality and reliability for every project with our vetted network.
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Find Provider
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrustedProviderSection;
