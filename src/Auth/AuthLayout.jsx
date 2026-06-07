import React from 'react';
import homeImage from '../assets/home-service.jpg';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img src={homeImage} alt="Home Service" className="w-full h-screen object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-12 bg-gray-50">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
