import { useEffect, useState } from 'react';
import api from '../../utils/api';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get('/account/bookings');
      setBookings(res.data);
    } catch (err) {
      console.error('Failed to fetch bookings:', err);
    }
  };

  const openModal = (id) => {
    setSelectedBookingId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBookingId(null);
  };

  const confirmCancel = async () => {
    try {
      await api.delete(`/account/bookings/${selectedBookingId}`);
      closeModal();
      fetchBookings();
    } catch (err) {
      alert('Failed to cancel booking');
    }
  };

  if (bookings.length === 0) {
    return <p className="text-center text-gray-600">You have no bookings yet.</p>;
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking._id} className="border rounded p-4 shadow-sm bg-white">
          <h3 className="font-semibold text-blue-800">{booking.service}</h3>
          <p><strong>Status:</strong> {booking.status || 'Pending'}</p>
          <p><strong>Booking Date:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
          <p><strong>Address:</strong> {booking.address}</p>
          <p><strong>Phone:</strong> {booking.phone}</p>

          {booking.status !== 'Cancelled' && (
            <button
              onClick={() => openModal(booking._id)}
              className="mt-3 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
            >
              Cancel Booking
            </button>
          )}
        </div>
      ))}

      {/* ✅ Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <p className="text-gray-600 mb-6">Do you really want to cancel this booking?</p>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmCancel}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Cancel
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBookings;
