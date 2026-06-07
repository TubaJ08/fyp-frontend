import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProfileSection from "./ProfileSection";
import PasswordSection from "./PasswordSection";
import UserBookings from "./UserBookings";

const AccountPage = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection />;
      case "password":
        return <PasswordSection />;
      case "bookings":
        return <UserBookings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-8">
      {/* Left Nav */}
      <div className="md:w-1/4">
        <h2 className="text-xl font-bold mb-6 text-gray-700">
          Welcome, {user?.name || "User"}!
        </h2>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === "profile"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("password")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === "password"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              Security
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === "bookings"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              My Bookings
            </button>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountPage;
