import React, { useState } from "react";
import api from '../../../utils/api';
import { FaCouch } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext"; 
import { useNavigate, useLocation } from "react-router-dom";

const serviceOptions = [
  { value: "Furniture Repair", label: "Furniture Repair", icon: <FaCouch /> },
  { value: "Furniture Cleaning", label: "Furniture Cleaning", icon: <MdCleaningServices /> },
  
];

const Furniture = () => {
 const { user } = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  if (!user) {
    navigate("/login", { state: { from: location.pathname } });
  }
}, [user, navigate, location]);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    category: 'Handcraft', // matches backend
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceSelect = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await api.post('/contact/submit', formData);
      if (res.data.success) {
        setStatus("✅ Request submitted successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          category: 'Electricity',
          service: '',
          message: '',
        });
      } else {
        setStatus("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Furniture Cleaning and Repair Services</h1>
      <p className="text-gray-600 mb-6">
        HOMO provides expert cleaner, repair and maintenance at your doorstep. With 6+ years of experience and 50,000+ satisfied customers, you can rely on our trusted professionals.
      </p>

      <h2 className="text-xl font-semibold mb-3 text-gray-800">📞 Please Fill The Form Below</h2>
      <p className="text-gray-500 mb-5">You will receive a call in a few minutes to guide you regarding your query.</p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone (03XXXXXXXXX)"
          required
          className="w-full border px-4 py-2 rounded"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          className="w-full border px-4 py-2 rounded"
          value={formData.address}
          onChange={handleChange}
        />

        <div>
          <label className="block mb-2 font-medium">Choose Your Service</label>
          <div className="flex flex-wrap gap-4">
            {serviceOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleServiceSelect(option.value)}
                className={`flex flex-col items-center p-4 border rounded cursor-pointer w-36 hover:bg-blue-50 transition ${
                  formData.service === option.value ? "border-blue-600 bg-blue-50" : "border-gray-300"
                }`}
              >
                <div className="text-blue-600 text-2xl mb-1">{option.icon}</div>
                <span className="text-sm font-medium text-gray-700">{option.label}</span>
              </div>
            ))}
          </div>
        </div>

        <textarea
          name="message"
          rows="4"
          placeholder="Please explain your problem (optional)"
          className="w-full border px-4 py-2 rounded"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {status && (
          <div className={`text-sm font-semibold ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Furniture;
