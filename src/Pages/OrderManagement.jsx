import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/button';

const statusStyles = {
  'Completed': 'bg-green-100 text-green-600',
  'In Progress': 'bg-blue-100 text-blue-600',
  'Pending': 'bg-yellow-100 text-yellow-600',
  'Cancelled': 'bg-red-100 text-red-600',
};

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('http://localhost:5000/api/bookings')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  };

  const handleView = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const updateStatus = (id, newStatus) => {
    axios.put(`http://localhost:5000/api/bookings/${id}/status`, { status: newStatus })
      .then(() => {
        setOrders(prev =>
        prev.map(order =>
         order.fullDetails._id === id || order._id === id
      ? { ...order, status: newStatus }
      : order
  )
);
        setShowModal(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Order Management</h2>
          <div className="flex space-x-2">
           <input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search by customer name or order ID..."
  className="border rounded px-3 py-1 w-64"
/>

<select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="border rounded px-3 py-1"
>
  <option value="All">All Status</option>
  <option value="Completed">Completed</option>
  <option value="In Progress">In Progress</option>
  <option value="Pending">Pending</option>
  <option value="Cancelled">Cancelled</option>
</select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-t border-gray-200">
            <thead>
              <tr className="text-gray-600">
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {orders
  .filter(order => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  })
  .map(order => (

                <tr key={order._id} className="border-t">
                  <td className="p-2 font-medium">{order.orderId}</td>
                  <td className="p-2">{order.customerName}</td>
                  <td className="p-2">{order.service}</td>
                  <td className="p-2">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2">${order.amount}</td>
                  <td className="space-x-2">
                    <Button onClick={() => handleView(order)} className="bg-blue-600 text-white hover:bg-blue-900">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-auto">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <p><strong>Name:</strong> {selectedOrder.customerName}</p>
              <p><strong>Service:</strong> {selectedOrder.service}</p>
              <p><strong>Address:</strong> {selectedOrder.fullDetails.address}</p>
              <p><strong>Message:</strong> {selectedOrder.fullDetails.message}</p>
              <p><strong>Email:</strong> {selectedOrder.fullDetails.email}</p>
              <p><strong>Phone:</strong> {selectedOrder.fullDetails.phone}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>

              <div className="mt-4 flex space-x-2">
                {['In Progress', 'Completed', 'Cancelled'].map((status) => (
                  <Button
                    key={status}
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={() => updateStatus(selectedOrder.fullDetails._id, status)}
                  >
                    Mark as {status}
                  </Button>
                ))}
              </div>

              <button onClick={() => setShowModal(false)} className="mt-4 text-blue-600 underline">
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
