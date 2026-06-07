import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleCallClick = () => {
    console.log("📞 User clicked the call button at", new Date().toLocaleString());
  };

  const handleScheduleClick = () => {
    navigate("/services/quote");
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Need Home Services Today?
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Don’t wait for small problems to become big ones. Contact us now for fast, reliable service
          from trusted professionals.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:03051234567"
            onClick={handleCallClick}
            className="flex items-center gap-2 bg-white text-blue-600 font-medium px-5 py-3 rounded-lg shadow hover:bg-blue-50 transition"
          >
            <FaPhoneAlt /> Call 0305-1234567
          </a>
          <button
            onClick={handleScheduleClick}
            className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
          >
            Schedule Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
