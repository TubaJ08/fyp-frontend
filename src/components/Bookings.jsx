import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CalendarDays, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Bookings() {
  const [totalBookings, setTotalBookings] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [completed, setCompleted] = useState(0);
const [cancelled, setCancelled] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then(res => setTotalBookings(res.data.length))
      .catch(err => console.error('Error fetching bookings:', err));

         axios.get('http://localhost:5000/api/bookings/pending-count')
          .then(res => setPendingOrders(res.data.pendingCount))
          .catch(err => console.error('Error fetching pending orders:', err));

          axios.get('http://localhost:5000/api/bookings?status=Completed')
    .then(res => setCompleted(res.data.length))
    .catch(err => console.error('Error fetching completed:', err));

  axios.get('http://localhost:5000/api/bookings?status=Cancelled')
    .then(res => setCancelled(res.data.length))
    .catch(err => console.error('Error fetching cancelled:', err));
  }, []);

  const bookingStats = [
    { label: 'Total Bookings', value: totalBookings, icon: <CalendarDays className="text-blue-500" />, color: 'text-blue-500' },
    { label: 'Pending', value: pendingOrders, icon: <Clock className="text-orange-500" />, color: 'text-orange-500' },
    { label: 'Completed', value: completed, icon: <CheckCircle className="text-green-500" />, color: 'text-green-500' },
    { label: 'Cancelled', value: cancelled, icon: <AlertTriangle className="text-red-500" />, color: 'text-red-500' },
  ];

  const peakBookingData = [
    { time: '6 AM', bookings: 5 },
    { time: '8 AM', bookings: 25 },
    { time: '10 AM', bookings: 45 },
    { time: '12 PM', bookings: 38 },
    { time: '2 PM', bookings: 42 },
    { time: '4 PM', bookings: 33 },
    { time: '6 PM', bookings: 25 },
    { time: '8 PM', bookings: 12 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {bookingStats.map((stat) => (
          <div key={stat.label} className="bg-white p-4 rounded shadow flex items-center space-x-4">
            <div>{stat.icon}</div>
            <div>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Peak Booking Times Graph */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Peak Booking Times</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={peakBookingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="bookings" stroke="#0ea5e9" activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
