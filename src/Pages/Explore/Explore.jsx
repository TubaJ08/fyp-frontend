import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMapMarkerAlt,
  faClock,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const serviceAreas = [
  { name: "Model Town", homes: "250+ homes served", response: "15 mins avg" },
  { name: "Johar Town", homes: "320+ homes served", response: "20 mins" },
  { name: "Wapda Town", homes: "200+ homes served", response: "18 mins" },
  { name: "DHA Phase V", homes: "190+ homes served", response: "25 mins" },
  { name: "Askari X", homes: "210+ homes served", response: "22 mins" },
  { name: "Bahria Town", homes: "800+ homes served", response: "30 mins" },
];

const ExploreServices = () => {
  const [activeTab, setActiveTab] = useState("areas");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const navigate = useNavigate();

  const handleSendEmail = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/explore/subscribe", { email });
      if (res.data.success) {
        setEmailStatus("✅ Email submitted!");
        setEmail("");
      } else {
        setEmailStatus("❌ Submission failed.");
      }
    } catch (err) {
      setEmailStatus("❌ Server error.");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
            Professional Services
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Explore Our <span className="text-blue-600">Home Services</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Discover licensed professionals for home maintenance & repairs. Fast, affordable, & trusted!
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2"
          >
            Browse Services <FontAwesomeIcon icon={faArrowRight} />
          </button>

          
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto mb-10 px-4">
          <div className="flex justify-center gap-4 border border-blue-300 rounded-full overflow-hidden w-fit mx-auto">
            <button
              onClick={() => setActiveTab("areas")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "areas" ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              Service Areas
            </button>
            <button
              onClick={() => setActiveTab("how")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "how" ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              How It Works
            </button>
          </div>
        </div>

        {activeTab === "areas" ? (
          <div className="max-w-6xl mx-auto grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 text-center shadow-sm hover:shadow-md transition"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-xl mb-2" />
                <h3 className="text-lg font-semibold mb-2">{area.name}</h3>
                <div className="flex justify-center gap-2 text-sm text-gray-600 mb-1">
                  <FontAwesomeIcon icon={faHome} /> {area.homes}
                </div>
                <div className="flex justify-center gap-2 text-sm text-gray-600">
                  <FontAwesomeIcon icon={faClock} /> {area.response}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto px-4 text-center text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
            <ol className="list-decimal list-inside space-y-3 text-left">
              <li>Choose your desired home service (e.g., electrician, plumber, etc.)</li>
              <li>Fill out a short form with your details and problem description</li>
              <li>Our system matches you with a verified professional near your location</li>
              <li>You receive a confirmation call within minutes to finalize the booking</li>
              <li>Service is delivered at your home—fast, affordable, and guaranteed</li>
            </ol>
          </div>
        )}
      </section>

      {/* Call + Email */}
      <div className="bg-blue-600 text-white py-10 px-4 rounded-lg text-center max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl font-semibold mb-2">Ready to get Started?</h3>
        <p className="mb-4">Join thousands of satisfied customers today.</p>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <a
            href="tel:03051234567"
            className="flex items-center gap-2 bg-white text-blue-600 font-medium px-5 py-2 rounded-md hover:bg-blue-50"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Call 0305-1234567
          </a>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-md text-gray-700 border border-gray-200 focus:ring-2 focus:ring-blue-300"
            />
            <button
              onClick={handleSendEmail}
              className="bg-white text-blue-600 px-4 py-2 rounded-r-md border-l border-gray-200 hover:bg-blue-100"
            >
              Send
            </button>
          </div>
        </div>
        {emailStatus && (
          <p className={`mt-2 text-sm ${emailStatus.includes("✅") ? "text-green-300" : "text-red-300"}`}>
            {emailStatus}
          </p>
        )}
      </div>
    </>
  );
};

export default ExploreServices;
