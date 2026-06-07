import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPhone,
  faUsers,
  faCheckCircle,
  faStar,
  faAward,
  faChevronDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const faqItems = [
  { question: "What types of home services do you offer?", answer: "We offer a range of services including plumbing, electrical, HVAC, and general handyman support." },
  { question: "How do I schedule a service appointment?", answer: "You can schedule online through our booking system or call our support line." },
  { question: "Are your technicians licensed and insured?", answer: "Yes, all of our technicians are fully licensed, insured, and background-checked." },
  { question: "What are your service hours and availability?", answer: "We operate from 7AM to 8PM on weekdays and offer limited weekend support." },
  { question: "Do you provide estimates before starting work?", answer: "Yes, we provide a free estimate before beginning any service." },
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, digital wallets, and cash for most services." },
  { question: "Do you offer warranties on your work?", answer: "All services are backed with a satisfaction guarantee and limited warranty." },
  { question: "How much do your services cost?", answer: "Prices vary depending on service type. Contact us for a detailed quote." },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSendEmail = () => {
    if (email.trim() === "") {
      setEmailStatus("❌ Please enter an email.");
    } else {
      setEmailStatus("✅ Email submitted!");
      setEmail("");
    }
    setTimeout(() => setEmailStatus(""), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Trusted Home Services
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Get instant answers to common questions about our professional home services.
          Can’t find what you’re looking for? Our friendly support team is here to help 24/7.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
         
          <a
            href="tel:03051234567"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md font-semibold flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPhone} /> Call 0305-1234567
          </a>
        </div>
      </div>

    

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-2">
            <FontAwesomeIcon icon={faUsers} size="lg" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">500+</h3>
          <p className="text-sm text-gray-600">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-2">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">99.8%</h3>
          <p className="text-sm text-gray-600">Success Rate</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-2">
            <FontAwesomeIcon icon={faStar} size="lg" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">4.9/5</h3>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-2">
            <FontAwesomeIcon icon={faAward} size="lg" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">1+</h3>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
      </div>

      {/* Accordion */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>
        <p className="text-gray-600 mt-2">Everything you need to know about our home services</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg mb-16">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Email Section */}
      <div className="bg-blue-600 text-white py-10 px-4 rounded-lg text-center max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl font-semibold mb-2">Still Have Questions?</h3>
        <p className="mb-4">Send us your query and our team will respond quickly.</p>
        <div className="flex justify-center items-center gap-3 flex-wrap">
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
        {emailStatus && (
          <p className={`mt-2 text-sm ${emailStatus.includes("✅") ? "text-green-300" : "text-red-300"}`}>
            {emailStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqPage;
