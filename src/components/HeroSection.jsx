import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import services from '../utils/data/servicesList';

const HeroSection = () => {
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

  // Smart fuzzy matching — finds first match
  const matched = services.find((item) =>
    item.name.toLowerCase().includes(lowerInput)
  );

  if (matched) {
    navigate(matched.path);
  } else {
    // Optional: show error or fallback
    alert("❌ No matching service found!");
  }
};


  return (
    <div className="bg-gradient-to-b from-[#dbeafe] to-[#93c5fd] rounded-3xl p-6 md:p-12 text-center relative overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        Connect with Reliable <br /> Professionals Home Service
      </h1>

      <form
        onSubmit={handleSubmit}
        className="relative max-w-md mx-auto mb-6"
        autoComplete="off"
      >
        <div className="flex">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search service"
            className="flex-1 py-2 px-4 rounded-l-full border border-white focus:outline-none"
          />
          <button className="bg-white p-3 rounded-r-full">
            <FaSearch className="text-blue-500" />
          </button>
        </div>

        {/* Suggestion Dropdown */}
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

      {/* You can keep your avatars below here */}
      {/* ... */}
    </div>
  );
};

export default HeroSection;
