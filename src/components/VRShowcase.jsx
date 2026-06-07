import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function VRShowcase() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block text-xs font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-full mb-4">
          Virtual Reality Interior Design
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Explore Home Interiors <span className="text-blue-600">in VR</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Immerse yourself in stunning home designs with our VR model collection.
          From modern minimalist to cozy farmhouse, find your perfect style inspiration.
        </p>

        <div className="mt-6 flex justify-center flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition">
            ▶ Start VR Experience
          </button>
          <button className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-xl font-medium hover:bg-blue-100 transition">
            ⬇ Download VR App
          </button>
        </div>

       
      </div>
    </section>
  );
}
