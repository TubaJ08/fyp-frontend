import React, { useState } from 'react';
import api from '../../utils/api';
import { electricityCards } from '../../utils/ObjectData/HandcraftCardData';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext"; 
import { useNavigate, useLocation } from "react-router-dom";
import HCImg from '../../assets/images/handcraft.jpeg';

const Handcraft = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [user, navigate, location]);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: 'Handcraft',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await api.post('/contact/submit', form);
      setStatus(res.data.message);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        service: 'Handcraft',
        message: '',
      });
    } catch (error) {
      setStatus('❌ Failed to send message');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">HandCraft Services</h1>
        <p className="text-gray-600 text-lg">Professional Handcraft repairs, installations, and maintenance for your home</p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <img src={HCImg} alt="Home" className="rounded-xl w-full" />

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow p-6 border">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">📅 Book Your Service</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required className="border p-2 rounded" />
            </div>
            <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="border p-2 rounded w-full" />
            <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Service Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="border p-2 rounded w-full" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="border p-2 rounded" />
              <input type="time" className="border p-2 rounded" />
            </div>
            <textarea placeholder="Describe Your Issue" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="border p-2 rounded w-full"></textarea>

            <div className="text-gray-500 text-sm">Service fee <span className="text-green-600 font-medium">Starting at $99</span></div>
            {status && <p className={`text-sm font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Request Service</button>
            <div className="text-center text-sm text-gray-600 mt-2">Need immediate help?</div>
            <button type="button" className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">📞 Call Emergency Line</button>
          </form>
        </div>
      </div>

      {/* What's Included */}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">✔️ What's Included</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      "General home repairs",
      "Furniture assembly",
      "Home maintenance",
      "Door and window repair",
      "Curtain and Rod Services",
      "Woodwork Assemble",
    ].map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-2">
          <span className="text-green-600 text-lg">✅</span>
          <p className="text-gray-800 text-sm font-medium">{item}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Why Choose Us */}
<div className="mt-16">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Why Choose Our Handcraft Services?</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { icon: "🛡️", text: "Skilled Handymen" },
      { icon: "⏱️", text: "Flexible Scheduling" },
      { icon: "👍", text: "Quality Workmanship" },
      { icon: "👷", text: "Multi-Skilled Professionals" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-2">
          <span className="text-emerald-600 text-lg">{item.icon}</span>
          <p className="text-gray-800 text-sm font-medium">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Service Cards Section */}
      <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">⚙️ Select Your Desired Service Now!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {electricityCards.map((service, idx) => (
          <div
            key={idx}
            onClick={() => navigate(service.route)} // ✅ Navigate on click
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Handcraft;
