import React, { useEffect, useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const categories = ['All', 'Home service', 'Electricity', 'Handcraft', 'Plumber', 'Mechanic'];

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const fetchServices = async (category = 'All') => {
    try {
      const res = await axios.get(`http://localhost:5000/api/services/${category}`);
      console.log('Category:', category);
      console.log('Fetched services:', res.data);
      setServices(res.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleBookNow = (category) => {
    const serviceRoute = `/services/${category.toLowerCase().replace(/\s/g, '-')}`;
    navigate(serviceRoute);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Service</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(cat);
                fetchServices(cat);
              }}
              className={`px-4 py-1 rounded-full border text-sm transition ${
                activeCategory === cat ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 relative"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
                <FaHeart />
              </button>
              <h3 className="text-md font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-500">{service.category}</p>
              <div className="flex items-center text-sm text-gray-700 mt-2">
                <FaStar className="text-yellow-400 mr-1" />
                {service.rating} <span className="text-gray-500 ml-1">({service.reviews})</span>
              </div>
              <div className="mt-2 text-blue-500 font-bold">
                ${service.price.toFixed(2)} <span className="text-sm font-normal text-gray-500">/ Hr</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">{service.distance}</div>

              {/* ✅ Book Now Button */}
              <button
                onClick={() => handleBookNow(service.category)}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
