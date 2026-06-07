import React, { useEffect, useState } from 'react';
import axios from 'axios';

const colors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-cyan-500',
  'bg-pink-500',
];

export default function MarketShare() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings/category-share')
      .then(res => {
        const colored = res.data.map((item, index) => ({
          ...item,
          color: colors[index % colors.length],
          dot: colors[index % colors.length],
        }));
        setServices(colored);
      })
      .catch(err => console.error('Error fetching market share:', err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {services.map(service => (
        <div key={service.name} className="border rounded-lg bg-white p-4 shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">{service.name}</h3>
            <span className={`w-3 h-3 rounded-full ${service.dot}`}></span>
          </div>
          <p className="text-sm text-gray-500 mb-1">Market Share</p>
          <div className="flex justify-between items-center">
            <span className="font-bold">{service.share}%</span>
          </div>
          <div className="mt-2 h-2 w-full bg-gray-200 rounded-full">
            <div
              className={`${service.color} h-2 rounded-full`}
              style={{ width: `${service.share}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
