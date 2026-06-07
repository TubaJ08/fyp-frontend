import React, { useEffect, useState } from 'react'; // ✅ Updated
import { Card, CardContent } from '../components/Cards';
import OrderManagement from './OrderManagement';
import { Button } from '../components/button';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CalendarDays, DollarSign, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // ✅ Added

const COLORS = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1',
  '#a4de6c', '#d0ed57', '#ffbb28', '#ff6666'
];




const revenueData = [
  { name: 'Jan', revenue: 50000 },
  { name: 'Feb', revenue: 55000 },
  { name: 'Mar', revenue: 60000 },
  { name: 'Apr', revenue: 70000 },
  { name: 'May', revenue: 75000 },
  { name: 'Jun', revenue: 65000 },
  { name: 'Jul', revenue: 72000 },
  { name: 'Aug', revenue: 75000 },
  { name: 'Sep', revenue: 80000 },
  { name: 'Oct', revenue: 85000 },
  { name: 'Nov', revenue: 90000 },
  { name: 'Dec', revenue: 95000 },
];




export default function AdminDashboard() {
  const [totalBookings, setTotalBookings] = useState(0);
   const [activeUsers, setActiveUsers] = useState(0); 
   const [pendingOrders, setPendingOrders] = useState(0);
   const [serviceData, setServiceData] = useState([]);
   const [monthlyRevenue, setMonthlyRevenue] = useState(0);

   
   // ✅ Added state

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings/monthly-count')
      .then(res => setTotalBookings(res.data.totalBookings))
      .catch(err => console.error('Error fetching total bookings:', err));

        axios.get('http://localhost:5000/api/users/active-monthly')
    .then(res => setActiveUsers(res.data.activeUsers))
    .catch(err => console.error('Error fetching active users:', err));

    axios.get('http://localhost:5000/api/bookings/pending-count')
    .then(res => setPendingOrders(res.data.pendingCount))
    .catch(err => console.error('Error fetching pending orders:', err));

    axios.get('http://localhost:5000/api/bookings/monthly-revenue')
    .then(res => setMonthlyRevenue(res.data.totalRevenue))
    .catch(err => console.error('Error fetching revenue:', err));

    axios.get('http://localhost:5000/api/bookings/analytics/service-popularity')
  .then(res => {
    const coloredData = res.data.map((item, index) => ({
      ...item,
      color: COLORS[index % COLORS.length] // Assign colors dynamically
    }));
    setServiceData(coloredData);
  })
  .catch(err => console.error('Error fetching service popularity:', err));


  }, []); // ✅ Added effect

  return (
    
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="font-medium text-blue-600">Dashboard</li>
          <li className="flex justify-between items-center">
            <Link to="/admin/orders" className="flex justify-between items-center w-full hover:text-blue-600">
              <span>Orders</span>
              <span className="bg-red-500 text-white rounded-full px-2 text-sm">{pendingOrders}</span>
            </Link>
          </li>
          <Link to="/admin/users" className="flex justify-between items-center w-full hover:text-blue-600">
            <span>Users</span>
          </Link>
          <li>Analytics</li>
          <li className="flex justify-between items-center">
            <Link to="/admin/service" className="flex justify-between items-center w-full hover:text-blue-600">
              <span>Services</span>
            </Link>
          </li>
          <li className="flex justify-between items-center">
            <Link to="/admin/booking" className="flex justify-between items-center w-full hover:text-blue-600">
              <span>Bookings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-gray-500 mb-6">Monitor your business performance and manage operations</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{totalBookings}</h2> {/* ✅ Dynamic */}
                  <p className="text-gray-500">Total Bookings</p>
                  <p className="text-green-600 text-sm mt-1">+12.5% this month</p>
                </div>
                <CalendarDays className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          {/* Other 3 Static Cards (unchanged) */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">${monthlyRevenue.toLocaleString()}</h2>
                  <p className="text-gray-500">Total Revenue</p>
                  <p className="text-green-600 text-sm mt-1">+8.2% this month</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{activeUsers}</h2>
                  <p className="text-gray-500">Active Users</p>
                  <p className="text-green-600 text-sm mt-1">+5.1% this month</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                 <h2 className="text-2xl font-bold">{pendingOrders}</h2>

                  <p className="text-gray-500">Pending Orders</p>
                  <p className="text-orange-500 text-sm mt-1">Needs attention</p>
                </div>
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          {/* <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4">Monthly Revenue Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card> */}

         <Card>
  <CardContent className="p-4">
    <h3 className="text-xl font-bold mb-4">Service Popularity</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={serviceData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) =>
            `${name} (${(percent * 100).toFixed(0)}%)`
          }
        >
          {serviceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </CardContent>
</Card>

        </div>
      </div>
    </div>
  );
}
