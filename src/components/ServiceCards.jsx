'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBolt,
  FaHandsHelping,
  FaToolbox,
  FaUserCog,
  FaStar,
  FaPhoneAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const serviceCards = [
  {
    icon: <FaToolbox />,
    label: 'Plumbing Services',
    slug: 'plumber',
    color: '#2E86E5',
    description: 'Professional plumbing solutions for your home',
    services: ['Emergency Drain Clean...', 'Pipe Repair & Replace...', 'Water Heater Services'],
    rating: 4.9,
    reviews: 234,
    price: '$99',
    phone: '03051234567',
  },
  {
    icon: <FaUserCog />,
    label: 'Home Services',
    slug: 'home-service',
    color: '#9351F2',
    description: 'Expert care and repair services for your home',
    services: ['AC Installation and Repair', 'Appliance Setup', 'Carpentry Fixes', 'Wall Drilling'],
    rating: 4.8,
    reviews: 189,
    price: '$149',
    phone: '03051234567',
  },
  {
    icon: <FaBolt />,
    label: 'Electricity Services',
    slug: 'electricity',
    color: '#EA9D09',
    description: 'Reliable electric repair and setup services',
    services: ['Fan & Light Setup and Repair', 'Wiring Fixes', 'Switchboard Repair', 'Generator Repair', 'Generator Repair', 'UPS Installation'],
    rating: 4.7,
    reviews: 210,
    price: '$129',
    phone: '03051234567',
  },
  {
    icon: <FaHandsHelping />,
    label: 'Handcraft Services',
    slug: 'handcraft',
    color: '#EA3D4F',
    description: 'Furniture fixes, decor installations & more',
    services: ['Furniture Repair', 'Mirror Hanging', 'Curtain Rod Setup', 'Wall Frame Installation'],
    rating: 4.85,
    reviews: 198,
    price: '$119',
    phone: '03051234567',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
  }),
};

const ServiceCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
      {serviceCards.map((card, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="p-4">
            {/* Icon & Price Tag */}
            <div className="flex justify-between items-start mb-2">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: card.color }}
              >
                {card.icon}
              </div>
              <span className="text-green-600 bg-green-100 px-2 py-1 text-xs rounded-full font-semibold">
                Starting at {card.price}
              </span>
            </div>

            {/* Title & Desc */}
            <h3 className="text-lg font-semibold text-gray-800">{card.label}</h3>
            <p className="text-sm text-gray-500 mt-1">{card.description}</p>

            {/* Rating */}
            <div className="flex items-center mt-2 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
              <span className="text-gray-700 ml-2">
                {card.rating} ({card.reviews} reviews)
              </span>
            </div>

            {/* Services */}
            <div className="mt-3 flex flex-wrap gap-2">
              {card.services.slice(0, 4).map((srv, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs whitespace-nowrap"
                >
                  {srv}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              {/* Book Service */}
              <Link
                to={`/services/${card.slug}`}
                className="text-white text-sm py-2 px-4 rounded-lg text-center font-medium transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: card.color }}
              >
                Book Service →
              </Link>

              {/* Call Button */}
              <a
                href={`tel:${card.phone}`}
                className="flex items-center justify-center gap-2 border text-sm border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <FaPhoneAlt className="text-gray-600" /> Call
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
