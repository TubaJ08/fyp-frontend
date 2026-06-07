'use client';
import React from 'react';
import { FaSearch, FaEnvelopeOpenText, FaPhoneAlt, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaSearch className="text-4xl text-blue-600" />,
    step: 'STEP 1',
    title: 'Search for Services',
    description:
      'Enter your location and select the type of service you need, from plumbing to home repairs and more.',
  },
  {
    icon: <FaEnvelopeOpenText className="text-4xl text-blue-600" />,
    step: 'STEP 2',
    title: 'Browse Local Experts',
    description:
      'Explore profiles, customer reviews, and ratings of nearby professionals you can trust.',
  },
  {
    icon: <FaPhoneAlt className="text-4xl text-blue-600" />,
    step: 'STEP 3',
    title: 'Book Your Service',
    description:
      'Choose a convenient time and book your selected professional in just a few clicks.',
  },
  {
    icon: <FaThumbsUp className="text-4xl text-blue-600" />,
    step: 'STEP 4',
    title: 'Enjoy Your Day',
    description:
      'Relax while a qualified expert arrives to complete the job efficiently and reliably.',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-14">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariant}
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <p className="text-blue-600 font-semibold text-sm mb-1">{step.step}</p>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
