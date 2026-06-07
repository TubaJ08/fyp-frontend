'use client';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function WhyChooseUs() {
  const navigate = useNavigate();

  const tickVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const features = [
    {
      title: 'Licensed & Insured',
      desc: 'All our technicians are fully licensed, bonded, and insured for your peace of mind.',
    },
    {
      title: '24/7 Emergency Service',
      desc: 'With emergency service, we’re one day or night away from your home fix.',
    },
    {
      title: 'Satisfaction Guarantee',
      desc: 'We stand behind our work with comprehensive warranties and a 100% satisfaction guarantee.',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#2563EB]">Why Choose HomeServe Pro?</h2>
        <p className="text-gray-600 mb-10">
          With over 5 years of experience and 1000+ satisfied customers, we’re the trusted choice for professional home services.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column with animated ticks */}
          <ul className="space-y-6">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={tickVariants}
              >
                <span className="text-[#2563EB] font-bold text-xl">✔</span>
                <div>
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.li>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-[#2563EB] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => navigate('/about')}
            >
              Learn More About Us →
            </motion.button>
          </ul>

          {/* Right column */}
          <div className="bg-blue-100 p-6 rounded-lg text-center shadow">
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6">Join thousands of satisfied customers who trust us with their home.</p>
            <div className="flex justify-center gap-8 mb-6">
              <div>
                <p className="text-2xl font-bold text-[#2563EB]">1K+</p>
                <p className="text-gray-600">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#2563EB]">4.9★</p>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/services/quote')}
              className="bg-white text-[#2563EB] border border-[#2563EB] px-4 py-2 rounded hover:bg-[#2563EB] hover:text-white transition"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
